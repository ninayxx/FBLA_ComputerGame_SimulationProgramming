var currentLevelIndex = 0;
var currentInputs = [];
var gateState = {};
var wireStates = {};
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};
var lastBulbState = false;
var bulbSoundTimeout = null;

document.addEventListener('DOMContentLoaded', function () {
    preloadSounds();
    startTimer();
    loadNewLevel();
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
    bgMusic = new Audio('assets/audio/music/eng-game.mp3');
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

function loadNewLevel() {
    var randomIndex = Math.floor(Math.random() * problems.length);
    loadLevel(randomIndex);
    document.getElementById('next-level-btn').classList.add('hidden');
    document.getElementById('next-level-btn').onclick = function () {
        startTimer();
        loadNewLevel();
    };
}

function loadLevel(index) {
    currentLevelIndex = index;
    var level = problems[index];
    document.getElementById('next-level-btn').classList.add('hidden');
    var oldBulb = document.getElementById('outputBulb');
    if (oldBulb) oldBulb.classList.remove('lit');
    currentInputs = new Array(level.inputs).fill(0);
    gateState = {};
    wireStates = {};
    renderCircuit(level);
}

function renderCircuit(level) {
    var board = document.getElementById('circuit-board');
    board.innerHTML = '';

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('wire-svg');
    svg.id = 'wire-svg';
    board.appendChild(svg);

    for (var i = 0; i < level.inputs; i++) {
        var switchEl = document.createElement('div');
        switchEl.className = 'component switch';
        switchEl.style.gridColumn = 1;
        switchEl.style.gridRow = i + 1;
        switchEl.id = 'input-' + i;
        switchEl.onclick = (function (idx) {
            return function () { toggleInput(idx); };
        })(i);
        switchEl.innerHTML =
            '<span>Input ' + String.fromCharCode(65 + i) + '</span>' +
            '<div class="status-indicator">0</div>';
        board.appendChild(switchEl);
    }

    level.layout.forEach(function (gate) {
        var slot = document.createElement('div');
        slot.className = 'component gate-slot';
        slot.style.gridColumn = gate.col + 1;
        slot.style.gridRow = gate.row;
        slot.id = gate.id;
        slot.dataset.id = gate.id;
        slot.ondragover = allowDrop;
        slot.ondrop = handleDrop;
        slot.innerHTML = 'Drop Gate';
        board.appendChild(slot);
    });

    var maxCol = Math.max.apply(null, level.layout.map(function (g) { return g.col; }));
    var outputEl = document.createElement('div');
    outputEl.className = 'component bulb';
    outputEl.id = 'outputBulb';
    outputEl.style.gridColumn = maxCol + 2;
    outputEl.style.gridRow = Math.ceil(level.inputs / 2);
    board.appendChild(outputEl);

    setTimeout(drawWires, 100);
}

function drawWires() {
    var level = problems[currentLevelIndex];
    var svg = document.getElementById('wire-svg');
    if (!svg) return;
    svg.innerHTML = '';

    level.layout.forEach(function (gate) {
        var gateEl = document.getElementById(gate.id);
        if (!gateEl) return;
        var gateRect = gateEl.getBoundingClientRect();
        var boardRect = document.getElementById('circuit-board').getBoundingClientRect();
        var targetX = gateRect.left - boardRect.left;
        var targetY = gateRect.top - boardRect.top + (gateRect.height / 2);

        gate.inputs.forEach(function (inputRef, index) {
            var startX, startY, sourceId;
            if (typeof inputRef === 'number') {
                var inputEl = document.getElementById('input-' + inputRef);
                var rect = inputEl.getBoundingClientRect();
                startX = rect.right - boardRect.left;
                startY = rect.top - boardRect.top + (rect.height / 2);
                sourceId = 'input-' + inputRef;
            } else {
                var sourceGate = document.getElementById(inputRef);
                var rect2 = sourceGate.getBoundingClientRect();
                startX = rect2.right - boardRect.left;
                startY = rect2.top - boardRect.top + (rect2.height / 2);
                sourceId = inputRef;
            }

            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.classList.add('wire-line');
            path.id = 'wire-' + sourceId + '-' + gate.id + '-' + index;
            var cp1x = startX + 40;
            var cp2x = targetX - 40;
            path.setAttribute("d", "M " + startX + " " + startY + " C " + cp1x + " " + startY + ", " + cp2x + " " + targetY + ", " + targetX + " " + targetY);
            svg.appendChild(path);
        });
    });

    var finalGateId = level.layout[level.layout.length - 1].id;
    var finalGateEl = document.getElementById(finalGateId);
    var outputEl = document.getElementById('outputBulb');

    if (finalGateEl && outputEl) {
        var gateRect2 = finalGateEl.getBoundingClientRect();
        var outRect = outputEl.getBoundingClientRect();
        var boardRect2 = document.getElementById('circuit-board').getBoundingClientRect();
        var sX = gateRect2.right - boardRect2.left;
        var sY = gateRect2.top - boardRect2.top + (gateRect2.height / 2);
        var tX = outRect.left - boardRect2.left;
        var tY = outRect.top - boardRect2.top + (outRect.height / 2);
        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.classList.add('wire-line');
        path2.id = 'wire-' + finalGateId + '-out';
        path2.setAttribute("d", "M " + sX + " " + sY + " L " + tX + " " + tY);
        svg.appendChild(path2);
    }
}

function toggleInput(index) {
    playSound('click');
    currentInputs[index] = currentInputs[index] === 0 ? 1 : 0;
    var el = document.getElementById('input-' + index);
    el.querySelector('.status-indicator').innerText = currentInputs[index];
    if (currentInputs[index]) el.classList.add('active');
    else el.classList.remove('active');
    evaluateCircuit();
}

function handleDragStart(e) {
    e.dataTransfer.setData("type", e.target.dataset.type);
}

function allowDrop(e) {
    e.preventDefault();
    if (e.target.classList.contains('gate-slot')) {
        e.target.classList.add('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    var slot = e.target.closest('.gate-slot');
    if (!slot) return;
    slot.classList.remove('drag-over');
    var type = e.dataTransfer.getData("type");
    var slotId = slot.dataset.id;
    gateState[slotId] = type;
    slot.innerHTML = '<div class="gate-filled" data-type="' + type + '">' + type + '</div>';
    playSound('drop');
    evaluateCircuit();
}

function evaluateCircuit() {
    var level = problems[currentLevelIndex];
    wireStates = {};
    var gateOutputs = {};

    level.layout.forEach(function (gate) {
        var type = gateState[gate.id];
        if (!type) {
            gateOutputs[gate.id] = 0;
            return;
        }
        var val1 = resolveValue(gate.inputs[0], gateOutputs);
        var val2 = resolveValue(gate.inputs[1], gateOutputs);
        updateWireVisual(gate.inputs[0], gate.id, 0, val1);
        updateWireVisual(gate.inputs[1], gate.id, 1, val2);
        var res = computeGate(type, val1, val2);
        gateOutputs[gate.id] = res;
    });

    var finalGateId = level.layout[level.layout.length - 1].id;
    var finalResult = gateOutputs[finalGateId];
    var wireOut = document.getElementById('wire-' + finalGateId + '-out');
    if (wireOut) {
        if (finalResult) wireOut.classList.add('active');
        else wireOut.classList.remove('active');
    }
    var bulb = document.getElementById('outputBulb');
    var isNowLit = !!finalResult;
    if (isNowLit) bulb.classList.add('lit');
    else bulb.classList.remove('lit');

    // Play sound when bulb state changes
    if (isNowLit !== lastBulbState) {
        if (bulbSoundTimeout) clearTimeout(bulbSoundTimeout);
        bulbSoundTimeout = setTimeout(function () {
            if (isNowLit) playSound('success');
            else playSound('failure');
        }, 50);
        lastBulbState = isNowLit;
    }
}

function resolveValue(ref, gateOutputs) {
    if (typeof ref === 'number') return currentInputs[ref];
    return gateOutputs[ref] || 0;
}

function updateWireVisual(sourceId, targetId, index, value) {
    var sId = typeof sourceId === 'number' ? 'input-' + sourceId : sourceId;
    var wire = document.getElementById('wire-' + sId + '-' + targetId + '-' + index);
    if (wire) {
        if (value) wire.classList.add('active');
        else wire.classList.remove('active');
    }
}

function computeGate(type, a, b) {
    switch (type) {
        case 'AND': return (a && b) ? 1 : 0;
        case 'OR': return (a || b) ? 1 : 0;
        case 'XOR': return (a !== b) ? 1 : 0;
        case 'NAND': return !(a && b) ? 1 : 0;
        default: return 0;
    }
}

function submitGame() {
    playSound('click');
    clearInterval(timerInterval);
    if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
    }
    var bulb = document.getElementById('outputBulb');
    var isLit = bulb && bulb.classList.contains('lit');
    var accuracy = isLit ? 100 : 0;
    var allGatesFilled = true;
    var level = problems[currentLevelIndex];
    level.layout.forEach(function (gate) {
        if (!gateState[gate.id]) allGatesFilled = false;
    });
    if (!allGatesFilled) {
        accuracy = 0;
    }
    var timePenalty = 0;
    if (timerSeconds > 60) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 60) / 30) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    sessionStorage.setItem('gameType', 'eng');
    sessionStorage.setItem('timeTaken', timerSeconds);
    sessionStorage.setItem('accuracy', accuracy);
    sessionStorage.setItem('score', score);

    if (bgMusic) bgMusic.pause();

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 1200);
}

function nextLevel() {
    playSound('click');
    startTimer();
    loadNewLevel();
}

function resetLevel() {
    playSound('click');
    loadLevel(currentLevelIndex);
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

window.onresize = drawWires;
