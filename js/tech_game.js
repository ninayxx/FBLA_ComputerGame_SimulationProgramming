var currentProblem = null;
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};
var draggedBlock = null;
var draggedBlockOffsetX = 0;

var introAudios = [];

document.addEventListener('DOMContentLoaded', function () {
    preloadSounds();
    playIntro();
    setupModalClickOutside();
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

    var soundFiles = ['background-noise', 'chatter', 'typing'];
    introAudios = soundFiles.map(function (name) {
        var audio = new Audio('assets/audio/sfx/' + name + '.mp3');
        audio.volume = 0.4;
        audio.loop = true;
        return audio;
    });

    function stopIntro() {
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
    if (skipBtn) skipBtn.addEventListener('click', function () { playSound('click'); stopIntro(); });
    if (playBtn) playBtn.addEventListener('click', function () { playSound('click'); startPlayback(); });
}

function startGame() {
    startTimer();
    loadNewProblem();
    startBackgroundMusic();
    showInstructions();
}

function preloadSounds() {
    var names = ['click', 'drop', 'success', 'failure'];
    var poolSize = 5;
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

function loadNewProblem() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    currentProblem = questions[randomIndex];
    document.getElementById('problem-title').innerText = currentProblem.title;
    var exampleCases = currentProblem.testCases ? currentProblem.testCases.slice(0, 3) : [];
    document.getElementById('problem-desc').innerHTML = currentProblem.description + (exampleCases.length > 0 ? formatTestCases(exampleCases) : "");

    var consoleDiv = document.getElementById('output-console');
    consoleDiv.innerHTML = 'Output will appear here...';
    consoleDiv.style.color = '#272727';

    // Combine correct lines + distractors and shuffle
    var allBlocks = currentProblem.correctOrder.slice().concat(currentProblem.distractors.slice());
    allBlocks = shuffleArray(allBlocks);

    var availableZone = document.getElementById('available-blocks');
    var solutionZone = document.getElementById('solution-blocks');
    availableZone.innerHTML = '';
    solutionZone.innerHTML = '<div class="dnd-placeholder" id="solution-placeholder">Drag code blocks here in the correct order</div>';

    allBlocks.forEach(function (line) {
        var block = createCodeBlock(line);
        availableZone.appendChild(block);
    });

    setupDropZones();
}

function createCodeBlock(text) {
    var block = document.createElement('div');
    block.className = 'code-block';
    block.draggable = true;
    block.dataset.code = text;

    var displayCode = text.trimStart ? text.trimStart() : text.replace(/^\s+/, '');

    var codeSpan = document.createElement('code');
    codeSpan.textContent = displayCode;
    block.appendChild(codeSpan);

    // Drag events
    block.addEventListener('dragstart', function (e) {
        draggedBlock = block;
        block.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', text);

        var rect = block.getBoundingClientRect();
        draggedBlockOffsetX = e.clientX - rect.left;
    });

    block.addEventListener('dragend', function () {
        block.classList.remove('dragging');
        draggedBlock = null;
    });

    // Touch support
    block.addEventListener('touchstart', handleTouchStart, { passive: false });
    block.addEventListener('touchmove', handleTouchMove, { passive: false });
    block.addEventListener('touchend', handleTouchEnd, { passive: false });

    return block;
}

// --- Touch drag support ---
var touchState = {
    block: null,
    ghost: null,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    originParent: null,
    originNextSibling: null
};

function handleTouchStart(e) {
    var touch = e.touches[0];
    var block = e.currentTarget;
    touchState.block = block;
    touchState.originParent = block.parentNode;
    touchState.originNextSibling = block.nextSibling;

    var rect = block.getBoundingClientRect();
    touchState.offsetX = touch.clientX - rect.left;
    touchState.offsetY = touch.clientY - rect.top;

    // Create ghost
    var ghost = block.cloneNode(true);
    ghost.className = 'code-block dragging touch-ghost';
    ghost.style.position = 'fixed';
    ghost.style.width = rect.width + 'px';
    ghost.style.left = (touch.clientX - touchState.offsetX) + 'px';
    ghost.style.top = (touch.clientY - touchState.offsetY) + 'px';
    ghost.style.zIndex = '9999';
    ghost.style.pointerEvents = 'none';
    document.body.appendChild(ghost);
    touchState.ghost = ghost;

    block.classList.add('dragging');
    e.preventDefault();
}

function handleTouchMove(e) {
    if (!touchState.ghost) return;
    var touch = e.touches[0];
    touchState.ghost.style.left = (touch.clientX - touchState.offsetX) + 'px';
    touchState.ghost.style.top = (touch.clientY - touchState.offsetY) + 'px';

    // Find drop target
    touchState.ghost.style.display = 'none';
    var elem = document.elementFromPoint(touch.clientX, touch.clientY);
    touchState.ghost.style.display = '';

    if (elem) {
        var zone = elem.closest('.dnd-zone');
        if (zone) {
            var block = touchState.block;
            var closest = getClosestBlock(zone, touch.clientY);
            if (closest) {
                if (closest !== block && closest.nextSibling !== block) {
                    zone.insertBefore(block, closest);
                }
            } else {
                if (zone.lastChild !== block) {
                    zone.appendChild(block);
                }
            }
            
            if (zone.id === 'solution-blocks') {
                var rect = zone.getBoundingClientRect();
                var blockLeft = touch.clientX - touchState.offsetX - rect.left;
                var indentLevel = Math.max(0, Math.round((blockLeft - 10) / 25));
                indentLevel = Math.min(indentLevel, 3);
                block.style.marginLeft = (indentLevel * 25) + 'px';
            } else {
                block.style.marginLeft = '0px';
            }
        }
    }

    e.preventDefault();
}

function handleTouchEnd(e) {
    if (!touchState.ghost || !touchState.block) return;
    var ghost = touchState.ghost;
    var block = touchState.block;

    // Find drop target
    ghost.style.display = 'none';
    var touch = e.changedTouches[0];
    var elem = document.elementFromPoint(touch.clientX, touch.clientY);
    ghost.style.display = '';

    // Remove ghost
    ghost.remove();
    touchState.ghost = null;
    block.classList.remove('dragging');

    if (elem) {
        var zone = elem.closest('.dnd-zone');
        if (zone) {
            playSound('drop');
            updatePlaceholder();
            touchState.block = null;
            return;
        }
    }

    // Return to original position if not dropped on a valid zone
    if (touchState.originNextSibling) {
        touchState.originParent.insertBefore(block, touchState.originNextSibling);
    } else {
        touchState.originParent.appendChild(block);
    }
    block.style.marginLeft = '0px';
    touchState.block = null;
}

function setupDropZones() {
    var zones = document.querySelectorAll('.dnd-zone');
    zones.forEach(function (zone) {
        zone.addEventListener('dragover', function (e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.classList.add('drag-over');

            if (draggedBlock) {
                var closest = getClosestBlock(zone, e.clientY);
                if (closest) {
                    if (closest !== draggedBlock && closest.nextSibling !== draggedBlock) {
                        zone.insertBefore(draggedBlock, closest);
                    }
                } else {
                    if (zone.lastChild !== draggedBlock) {
                        zone.appendChild(draggedBlock);
                    }
                }
                
                if (zone.id === 'solution-blocks') {
                    var rect = zone.getBoundingClientRect();
                    var blockLeft = e.clientX - draggedBlockOffsetX - rect.left;
                    var indentLevel = Math.max(0, Math.round((blockLeft - 10) / 25));
                    indentLevel = Math.min(indentLevel, 3);
                    draggedBlock.style.marginLeft = (indentLevel * 25) + 'px';
                } else {
                    draggedBlock.style.marginLeft = '0px';
                }
            }
        });

        zone.addEventListener('dragleave', function (e) {
            // Only remove if actually leaving the zone
            if (!zone.contains(e.relatedTarget)) {
                zone.classList.remove('drag-over');
            }
        });

        zone.addEventListener('drop', function (e) {
            e.preventDefault();
            zone.classList.remove('drag-over');

            if (draggedBlock) {
                playSound('drop');
                updatePlaceholder();
            }
        });
    });
}

function getClosestBlock(zone, y) {
    var blocks = Array.from(zone.querySelectorAll('.code-block:not(.dragging)'));
    var closest = null;
    var closestOffset = Number.NEGATIVE_INFINITY;

    blocks.forEach(function (block) {
        var rect = block.getBoundingClientRect();
        var offset = y - rect.top - rect.height / 2;
        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closest = block;
        }
    });

    return closest;
}

function updatePlaceholder() {
    var solutionZone = document.getElementById('solution-blocks');
    var placeholder = document.getElementById('solution-placeholder');
    var blocks = solutionZone.querySelectorAll('.code-block');

    if (blocks.length === 0) {
        if (!placeholder) {
            var ph = document.createElement('div');
            ph.className = 'dnd-placeholder';
            ph.id = 'solution-placeholder';
            ph.textContent = 'Drag code blocks here in the correct order';
            solutionZone.appendChild(ph);
        }
    } else {
        if (placeholder) placeholder.remove();
    }
}

function shuffleArray(arr) {
    var shuffled = arr.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function runCode() {
    playSound('click');
    var consoleDiv = document.getElementById('output-console');
    var solutionZone = document.getElementById('solution-blocks');
    var userBlocks = Array.from(solutionZone.querySelectorAll('.code-block'));

    if (userBlocks.length === 0) {
        consoleDiv.innerHTML = '<div style="color: coral;">No blocks in solution area! Drag blocks from Available Blocks.</div>';
        playSound('failure');
        return { passed: 0, total: currentProblem.testCases.length };
    }

    var userCode = userBlocks.map(function (b) { return b.dataset.code; }).join('\n');
    var match = userCode.match(/function\s+([\w]+)/);
    if (!match) {
        consoleDiv.innerHTML = '<div style="color: coral;">Error: No function found in your code. Make sure the function declaration block is included.</div>';
        playSound('failure');
        return { passed: 0, total: currentProblem.testCases.length };
    }
    
    var functionName = match[1];
    var runCases = currentProblem.testCases;

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
    if (timerSeconds > 90) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 90) / 15) * 5);
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

function showCheatSheet() {
    playSound('click');
    var modal = document.getElementById('cheatsheet-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideCheatSheet() {
    playSound('click');
    var modal = document.getElementById('cheatsheet-modal');
    if (modal) modal.classList.add('hidden');
}

function setupModalClickOutside() {
    ['instructions-modal', 'cheatsheet-modal'].forEach(function (id) {
        var overlay = document.getElementById(id);
        if (overlay) {
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) {
                    overlay.classList.add('hidden');
                    playSound('click');
                }
            });
        }
    });
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
