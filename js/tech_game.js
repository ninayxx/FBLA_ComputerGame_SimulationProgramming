var currentProblem = null;
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};

document.addEventListener('DOMContentLoaded', function () {
    preloadSounds();
    startTimer();
    loadNewProblem();
    startBackgroundMusic();
    showInstructions();
});

function preloadSounds() {
    var names = ['click', 'drop', 'success', 'failure'];
    var poolSize = 3;
    names.forEach(function (name) {
        soundPool[name] = [];
        for (var i = 0; i < poolSize; i++) {
            var audio = new Audio('assets/audio/sfx/' + name + '.mp3');
            audio.preload = 'auto';
            audio.volume = 0.4;
            audio.load();
            soundPool[name].push(audio);
        }
    });
}

function startBackgroundMusic() {
    bgMusic = new Audio('assets/audio/music/tech-game.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.2;
    bgMusic.play().catch(function () {
        document.addEventListener('click', function tryPlay() {
            if (bgMusic) {
                bgMusic.play().catch(function () { });
            }
            document.removeEventListener('click', tryPlay);
        });
    });
}

function startTimer() {
    timerSeconds = 0;
    clearInterval(timerInterval);

    if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
    }

    if (!tickSound) {
        tickSound = new Audio('assets/audio/sfx/tick.mp3');
        tickSound.loop = true;
        tickSound.volume = 0.2;
    }
    tickSound.play().catch(function () { });

    timerInterval = setInterval(function () {
        timerSeconds++;
        var m = Math.floor(timerSeconds / 60);
        var s = timerSeconds % 60;
        document.getElementById('stopwatch').textContent =
            String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }, 1000);
}

function loadNewProblem() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    currentProblem = questions[randomIndex];
    document.getElementById('problem-title').innerText = currentProblem.title;
    var exampleCases = currentProblem.testCases.slice(0, 5);
    document.getElementById('problem-desc').innerHTML = currentProblem.description + formatTestCases(exampleCases);
    document.getElementById('code-editor').value = currentProblem.initialCode;
    var consoleDiv = document.getElementById('output-console');
    consoleDiv.innerHTML = 'Output will appear here...';
    consoleDiv.style.color = '#272727';
}

function runCode() {
    playSound('click');
    var userCode = document.getElementById('code-editor').value;
    var consoleDiv = document.getElementById('output-console');
    var match = userCode.match(/function\s+([\w]+)/);
    if (!match) {
        consoleDiv.innerHTML = '<div style="color: coral;">Error: No function found in your code.</div>';
        playSound('failure');
        return { passed: 0, total: 5 };
    }
    var functionName = match[1];
    var runCases = currentProblem.testCases.slice(0, 5);

    try {
        var setupFunc = new Function(userCode + '\nreturn ' + functionName + ';');
        var userFunc = setupFunc();
        var allPassed = true;
        var passedCount = 0;
        consoleDiv.innerHTML = '';

        runCases.forEach(function (testCase, index) {
            var input = testCase.input;
            var expected = testCase.expected;
            var result = userFunc.apply(null, input);
            var resultStr = JSON.stringify(result);
            var expectedStr = JSON.stringify(expected);

            if (resultStr === expectedStr) {
                consoleDiv.innerHTML += '<div style="color: #2e7d32;">Test Case ' + (index + 1) + ': Passed! (' + resultStr + ')</div>';
                passedCount++;
            } else {
                consoleDiv.innerHTML += '<div style="color: coral;">Test Case ' + (index + 1) + ': Failed. Expected ' + expectedStr + ', got ' + resultStr + '</div>';
                allPassed = false;
            }
        });

        if (allPassed) {
            consoleDiv.innerHTML += '<div style="color: #2e7d32; margin-top: 10px; font-weight: bold;">ALL TESTS PASSED!</div>';
            playSound('success');
        } else {
            playSound('failure');
        }

        return { passed: passedCount, total: runCases.length };
    } catch (err) {
        consoleDiv.innerText = 'Error: ' + err.message;
        consoleDiv.style.color = 'coral';
        playSound('failure');
        return { passed: 0, total: runCases.length };
    }
}

function submitCode() {
    playSound('click');
    clearInterval(timerInterval);
    if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
    }
    var results = runCode();
    var accuracy = results.total > 0 ? (results.passed / results.total) * 100 : 0;
    var timePenalty = 0;
    if (timerSeconds > 120) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 120) / 30) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    sessionStorage.setItem('gameType', 'tech');
    sessionStorage.setItem('timeTaken', timerSeconds);
    sessionStorage.setItem('accuracy', accuracy);
    sessionStorage.setItem('score', score);

    if (bgMusic) bgMusic.pause();

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 1200);
}

function formatTestCases(testCases) {
    var examples = testCases.map(function (test, index) {
        return '<div class="example-box" style="margin-top: 10px; padding: 8px; background: #fafafa; border-radius: 6px; border: 1px solid #525252; font-family: monospace; font-size: 0.9em;">' +
            '<strong>Example ' + (index + 1) + ':</strong><br>' +
            '<span style="color: #5a8ead">Input:</span> ' + JSON.stringify(test.input) + '<br>' +
            '<span style="color: #ce9178">Expected:</span> ' + JSON.stringify(test.expected) +
            '</div>';
    }).join('');
    return '<h3 style="margin-top: 20px; color: #4e4e4e;">Examples:</h3>' + examples;
}

function exitGame() {
    playSound('click');
    clearInterval(timerInterval);
    if (bgMusic) bgMusic.pause();
    if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
    }
    window.location.href = 'index.html#job-select';
}

function showInstructions() {
    var modal = document.getElementById('instructions-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideInstructions() {
    playSound('click');
    var modal = document.getElementById('instructions-modal');
    if (modal) modal.classList.add('hidden');
}

function playSound(name) {
    try {
        var pool = soundPool[name];
        if (pool && pool.length > 0) {
            var audio = null;
            for (var i = 0; i < pool.length; i++) {
                if (pool[i].paused || pool[i].ended) {
                    audio = pool[i];
                    break;
                }
            }
            if (!audio) {
                audio = pool[0];
            }
            audio.currentTime = 0;
            audio.play().catch(function () { });
        }
    } catch (e) { }
}

var editor = document.getElementById('code-editor');
editor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
    }
});
