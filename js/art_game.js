var currentQuestion = null;
var selectedColor = null;
var userGrid = [];
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};
var hasSubmitted = false;

var introAudios = [];


document.addEventListener('DOMContentLoaded', function () {
    preloadSounds();
    playIntro();
});

function playIntro() {
    var overlay = document.getElementById('intro-overlay');
    var video = document.getElementById('intro-video');
    var skipBtn = document.getElementById('skip-intro');
    var playBtn = document.getElementById('play-intro-btn');

    if (!overlay || !video) {
        startGame();
        return;
    }

    var soundFiles = ['painting', 'pencil'];
    introAudios = soundFiles.map(function (name) {
        var audio = new Audio('assets/audio/sfx/' + name + '.mp3');
        audio.volume = 0.4;
        audio.loop = true;
        return audio;
    });

    var introFinished = false;

    function stopIntro() {
        if (introFinished) return;
        introFinished = true;
        video.pause();
        introAudios.forEach(function (audio) {
            audio.pause();
            audio.currentTime = 0;
        });
        overlay.style.display = 'none';
        startGame();
    }

    function startPlayback() {
        playBtn.style.display = 'none';
        video.play().catch(function () { });
        introAudios.forEach(function (audio) {
            audio.play().catch(function () { });
        });
    }

    video.addEventListener('ended', stopIntro);
    video.addEventListener('error', stopIntro);
    if (skipBtn) skipBtn.addEventListener('click', function () { playSound('click'); stopIntro(); });
    if (playBtn) playBtn.addEventListener('click', function () { playSound('click'); startPlayback(); });

    // If the intro video asset is missing, continue into gameplay automatically.
    setTimeout(function () {
        if (!introFinished && (video.error || video.networkState === video.NETWORK_NO_SOURCE)) {
            stopIntro();
        }
    }, 1200);
}

function startGame() {
    startTimer();
    initArtGame();
    startBackgroundMusic();
    showInstructions();
}

function preloadSounds() {
    var names = ['click', 'drop', 'splash', 'success', 'failure'];
    var poolSize = 5;
    names.forEach(function (name) {
        soundPool[name] = [];
        for (var i = 0; i < poolSize; i++) {
            var audio = new Audio('assets/audio/sfx/' + name + '.mp3');
            audio.preload = 'auto';
            if (name === 'splash') {
                audio.volume = 0.2;
            } else {
                audio.volume = 0.4;
            }
            audio.load();
            soundPool[name].push(audio);
        }
    });
}

function startBackgroundMusic() {
    bgMusic = new Audio('assets/audio/music/gameplay.mp3');
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

function initArtGame() {
    var submitBtn = document.getElementById('check-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
        submitBtn.onclick = checkAnswer;
    }
    hasSubmitted = false;
    loadNewProblem();
}

function loadNewProblem() {
    var randomIndex = Math.floor(Math.random() * artQuestions.length);
    currentQuestion = artQuestions[randomIndex];
    selectedColor = currentQuestion.palette[1] || '#000000';
    buildPalette(currentQuestion.palette);
    renderSampleGrid();
    buildPlayerGrid();
}

function buildPalette(palette) {
    const paletteContainer = document.getElementById('tool-palette');
    paletteContainer.innerHTML = '';
    palette.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.className = 'palette-swatch';
        swatch.style.backgroundColor = color;
        swatch.title = color;
        swatch.addEventListener('click', function () {
            selectedColor = color;
            document.getElementById('selected-color-code').textContent = color;
            document.getElementById('target-color-indicator').style.backgroundColor = color;
            document.querySelectorAll('.palette-swatch').forEach(el => el.classList.remove('selected'));
            swatch.classList.add('selected');
        });
        if (index === 0) {
            swatch.classList.add('selected');
            selectedColor = color;
            document.getElementById('selected-color-code').textContent = color;
            document.getElementById('target-color-indicator').style.backgroundColor = color;
        }
        paletteContainer.appendChild(swatch);
    });
}

function renderSampleGrid() {
    const sampleContainer = document.getElementById('sample-grid');
    sampleContainer.innerHTML = '';
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    sampleContainer.style.gridTemplateColumns = `repeat(${cols}, 48px)`;
    sampleContainer.style.gridTemplateRows = `repeat(${rows}, 48px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            const colorCode = currentQuestion.pattern[r][c];
            cell.style.backgroundColor = getColorFromPalette(colorCode, currentQuestion.palette);
            sampleContainer.appendChild(cell);
        }
    }
}

function buildPlayerGrid() {
    const playerContainer = document.getElementById('player-grid');
    playerContainer.innerHTML = '';
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    userGrid = [];

    playerContainer.style.gridTemplateColumns = `repeat(${cols}, 48px)`;
    playerContainer.style.gridTemplateRows = `repeat(${rows}, 48px)`;

    for (let r = 0; r < rows; r++) {
        userGrid[r] = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.style.backgroundColor = '#FFFFFF';
            userGrid[r][c] = null;

            cell.addEventListener('click', function () {
                playSound('splash');
                userGrid[r][c] = selectedColor;
                cell.style.backgroundColor = selectedColor;
                cell.classList.add('filled');
                cell.classList.remove('correct', 'wrong');
            });

            playerContainer.appendChild(cell);
        }
    }
}

function checkAnswer() {
    if (hasSubmitted) return;
    hasSubmitted = true;
    playSound('click');
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    let matched = 0;
    let total = rows * cols;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const targetColor = getColorFromPalette(currentQuestion.pattern[r][c], currentQuestion.palette);
            const enteredColor = userGrid[r][c] || '#FFFFFF';
            const cellSelector = `[data-row='${r}'][data-col='${c}']`;
            const cell = document.querySelector('#player-grid ' + cellSelector);

            if (enteredColor.toLowerCase() === targetColor.toLowerCase()) {
                matched++;
                cell.classList.add('correct');
                cell.classList.remove('wrong');
            } else {
                cell.classList.add('wrong');
                cell.classList.remove('correct');
            }
        }
    }

    const accuracy = Math.round((matched / total) * 100);
    var timePenalty = 0;
    if (timerSeconds > 30) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 30) / 30) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    stopTimer();
    const timeTaken = timerSeconds;
    sessionStorage.setItem('gameType', 'art');
    sessionStorage.setItem('timeTaken', timeTaken.toString());
    sessionStorage.setItem('accuracy', accuracy.toString());
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('artGameScore', score.toString());

    var submitBtn = document.getElementById('check-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
    }

    if (matched === total) {
        playSound('success');
    } else {
        playSound('failure');
    }
    if (bgMusic) bgMusic.pause();
    setFeedback(`Submitted: ${matched}/${total} correct. Accuracy ${accuracy}% | Score ${score}.`);

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 1200);
}

function setFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
    }
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
    playSound('click');
    var modal = document.getElementById('instructions-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideInstructions() {
    playSound('click');
    var modal = document.getElementById('instructions-modal');
    if (modal) modal.classList.add('hidden');
}

function clearGrid() {
    playSound('click');
    if (hasSubmitted) return;
    var rows = currentQuestion.rows;
    var cols = currentQuestion.cols;
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            userGrid[r][c] = null;
            var cellSelector = "[data-row='" + r + "'][data-col='" + c + "']";
            var cell = document.querySelector('#player-grid ' + cellSelector);
            if (cell) {
                cell.style.backgroundColor = '#FFFFFF';
                cell.classList.remove('filled', 'correct', 'wrong');
            }
        }
    }
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
            audio.play().catch(function (err) {
                console.error("Audio playback error for " + name + ":", err);
            });
        } else {
            console.warn("Sound pool missing or empty for:", name);
        }
    } catch (e) {
        console.error("playSound exception for " + name + ":", e);
    }
}
