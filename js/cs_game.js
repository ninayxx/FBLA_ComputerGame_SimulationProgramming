var currentScenario = null;
var currentRound = 0;
var totalRounds = 3;
var roundScores = [];
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};
var hasSubmitted = false;
var introAudios = [];
var selectedResponse = null;
var draggedOptionEl = null;


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

    var soundFiles = ['chatter', 'ringing', 'chatter', 'typing'];
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

    setTimeout(function () {
        if (!introFinished && (video.error || video.networkState === video.NETWORK_NO_SOURCE)) {
            stopIntro();
        }
    }, 1200);
}


function startGame() {
    startTimer();
    startBackgroundMusic();
    pickScenario();
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


function pickScenario() {
    var idx = Math.floor(Math.random() * csScenarios.length);
    currentScenario = csScenarios[idx];
    currentRound = 0;
    roundScores = [];
    selectedResponse = null;

    document.getElementById('scenario-title').textContent = currentScenario.title;
    document.getElementById('scenario-desc').textContent = currentScenario.situation;
    document.getElementById('customer-name').textContent = currentScenario.customerName;
    document.getElementById('customer-emoji').textContent = currentScenario.customerEmoji;

    updateProgressDots();
    showRound();
}


function showRound() {
    var round = currentScenario.rounds[currentRound];
    selectedResponse = null;
    draggedOptionEl = null;

    // Update chat area
    var chatArea = document.getElementById('chat-area');
    
    // Add customer message
    var customerBubble = document.createElement('div');
    customerBubble.className = 'chat-bubble customer-bubble';
    customerBubble.innerHTML = '<span class="bubble-name">' + currentScenario.customerEmoji + ' ' + currentScenario.customerName + '</span>' +
        '<p>' + round.customerText + '</p>';
    chatArea.appendChild(customerBubble);

    // Add reply drop zone
    var replyZone = document.createElement('div');
    replyZone.className = 'chat-bubble reply-zone';
    replyZone.id = 'reply-zone-' + currentRound;
    replyZone.innerHTML = '<span class="bubble-name">🧑‍💼 You (Agent)</span>' +
        '<div class="drop-target" id="drop-target-' + currentRound + '"><p class="drop-hint">Drag your response here...</p></div>';
    chatArea.appendChild(replyZone);

    // Scroll to bottom after rendering
    setTimeout(function() {
        chatArea.scrollTo({
            top: chatArea.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);

    // Setup drop zone
    setupDropTarget();

    // Build response options
    buildOptions(round.options);

    // Update button states
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').textContent = 'Send Response';
    document.getElementById('feedback').textContent = '';

    updateProgressDots();
}


function buildOptions(options) {
    var container = document.getElementById('options-container');
    container.innerHTML = '';

    // Shuffle options
    var shuffled = options.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = tmp;
    }

    shuffled.forEach(function (opt, index) {
        var card = document.createElement('div');
        card.className = 'response-option';
        card.setAttribute('draggable', 'true');
        card.dataset.score = opt.score;
        card.dataset.index = index;
        card.textContent = opt.text;

        card.addEventListener('dragstart', function (e) {
            card.classList.add('dragging');
            draggedOptionEl = card;
            e.dataTransfer.setData('text/plain', index.toString());
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', function () {
            card.classList.remove('dragging');
        });

        // Touch events
        card.addEventListener('touchstart', handleOptTouchStart, { passive: false });
        card.addEventListener('touchmove', handleOptTouchMove, { passive: false });
        card.addEventListener('touchend', handleOptTouchEnd, { passive: false });

        container.appendChild(card);
    });
}


// Touch drag for response options
var touchOptEl = null;
var touchOptClone = null;
var touchOptOffX = 0;
var touchOptOffY = 0;

function handleOptTouchStart(e) {
    if (hasSubmitted) return;
    var card = e.currentTarget;
    if (card.classList.contains('placed')) return;

    e.preventDefault();
    touchOptEl = card;
    var touch = e.touches[0];
    var rect = card.getBoundingClientRect();
    touchOptOffX = touch.clientX - rect.left;
    touchOptOffY = touch.clientY - rect.top;

    touchOptClone = card.cloneNode(true);
    touchOptClone.style.position = 'fixed';
    touchOptClone.style.zIndex = '9000';
    touchOptClone.style.pointerEvents = 'none';
    touchOptClone.style.opacity = '0.85';
    touchOptClone.style.width = rect.width + 'px';
    touchOptClone.style.left = (touch.clientX - touchOptOffX) + 'px';
    touchOptClone.style.top = (touch.clientY - touchOptOffY) + 'px';
    document.body.appendChild(touchOptClone);
    card.classList.add('dragging');
}

function handleOptTouchMove(e) {
    if (!touchOptEl || !touchOptClone) return;
    e.preventDefault();
    var touch = e.touches[0];
    touchOptClone.style.left = (touch.clientX - touchOptOffX) + 'px';
    touchOptClone.style.top = (touch.clientY - touchOptOffY) + 'px';

    var target = document.getElementById('drop-target-' + currentRound);
    if (target) {
        var tRect = target.getBoundingClientRect();
        if (touch.clientX >= tRect.left && touch.clientX <= tRect.right &&
            touch.clientY >= tRect.top && touch.clientY <= tRect.bottom) {
            target.classList.add('drag-over');
        } else {
            target.classList.remove('drag-over');
        }
    }
}

function handleOptTouchEnd(e) {
    if (!touchOptEl || !touchOptClone) return;
    e.preventDefault();
    var touch = e.changedTouches[0];

    var target = document.getElementById('drop-target-' + currentRound);
    if (target) {
        var tRect = target.getBoundingClientRect();
        target.classList.remove('drag-over');
        if (touch.clientX >= tRect.left && touch.clientX <= tRect.right &&
            touch.clientY >= tRect.top && touch.clientY <= tRect.bottom) {
            placeResponse(touchOptEl);
        }
    }

    touchOptEl.classList.remove('dragging');
    if (touchOptClone && touchOptClone.parentNode) {
        touchOptClone.parentNode.removeChild(touchOptClone);
    }
    touchOptEl = null;
    touchOptClone = null;
}


function setupDropTarget() {
    var target = document.getElementById('drop-target-' + currentRound);
    if (!target) return;

    target.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        target.classList.add('drag-over');
    });

    target.addEventListener('dragleave', function () {
        target.classList.remove('drag-over');
    });

    target.addEventListener('drop', function (e) {
        e.preventDefault();
        target.classList.remove('drag-over');
        if (draggedOptionEl) {
            placeResponse(draggedOptionEl);
        }
    });
}


function placeResponse(card) {
    if (hasSubmitted) return;
    if (selectedResponse) return; // Already placed

    playSound('drop');

    selectedResponse = {
        score: parseInt(card.dataset.score),
        text: card.textContent
    };

    // Show the response in the drop zone
    var target = document.getElementById('drop-target-' + currentRound);
    target.innerHTML = '<p class="placed-response">' + card.textContent + '</p>';
    target.classList.add('filled');

    // Mark the card as placed
    card.classList.add('placed');

    // Disable other options
    var allOpts = document.querySelectorAll('.response-option');
    allOpts.forEach(function (opt) {
        opt.setAttribute('draggable', 'false');
        if (!opt.classList.contains('placed')) {
            opt.classList.add('disabled');
        }
    });

    // Enable submit
    document.getElementById('submit-btn').disabled = false;
}


function submitResponse() {
    if (!selectedResponse) return;
    if (hasSubmitted) return;

    playSound('click');

    // Record score for this round
    roundScores.push(selectedResponse.score);

    // Visual feedback on the placed response
    var target = document.getElementById('drop-target-' + currentRound);
    if (selectedResponse.score >= 80) {
        target.classList.add('score-great');
        document.getElementById('feedback').textContent = '★ Excellent response!';
    } else if (selectedResponse.score >= 40) {
        target.classList.add('score-okay');
        document.getElementById('feedback').textContent = '● Okay response.';
    } else {
        target.classList.add('score-poor');
        document.getElementById('feedback').textContent = '✗ Poor response.';
    }

    currentRound++;

    if (currentRound >= totalRounds) {
        // All rounds done — calculate final score
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').textContent = 'Calculating...';

        setTimeout(function () {
            finishGame();
        }, 1500);
    } else {
        // More rounds
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').textContent = 'Next...';

        setTimeout(function () {
            showRound();
        }, 1500);
    }
}


function finishGame() {
    hasSubmitted = true;

    // Average the round scores for accuracy
    var total = 0;
    for (var i = 0; i < roundScores.length; i++) {
        total += roundScores[i];
    }
    var accuracy = Math.round(total / roundScores.length);

    // Time penalty: grace period = 20s
    var timePenalty = 0;
    if (timerSeconds > 20) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 20) / 4) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    stopTimer();
    var timeTaken = timerSeconds;
    sessionStorage.setItem('gameType', 'customer-service');
    sessionStorage.setItem('timeTaken', timeTaken.toString());
    sessionStorage.setItem('accuracy', accuracy.toString());
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('customerServiceGameScore', score.toString());

    if (score >= 70) {
        playSound('success');
    } else {
        playSound('failure');
    }

    document.getElementById('feedback').textContent =
        'Conversation complete! Score: ' + score + '/100';

    if (bgMusic) bgMusic.pause();

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 2000);
}


function updateProgressDots() {
    var dotsContainer = document.getElementById('progress-dots');
    dotsContainer.innerHTML = '';
    for (var i = 0; i < totalRounds; i++) {
        var dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i < currentRound) {
            dot.classList.add('completed');
            if (roundScores[i] >= 80) dot.classList.add('dot-great');
            else if (roundScores[i] >= 40) dot.classList.add('dot-okay');
            else dot.classList.add('dot-poor');
        } else if (i === currentRound) {
            dot.classList.add('active');
        }
        dot.textContent = (i + 1);
        dotsContainer.appendChild(dot);
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

function setupModalClickOutside() {
    var overlay = document.getElementById('instructions-modal');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
                playSound('click');
            }
        });
    }
}
