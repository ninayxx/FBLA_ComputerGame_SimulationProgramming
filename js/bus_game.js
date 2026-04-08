var currentRound = null;
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

/* ────────────────────────────────────────────────────────
   Intro video
   ──────────────────────────────────────────────────────── */

function playIntro() {
    var overlay = document.getElementById('intro-overlay');
    var video = document.getElementById('intro-video');
    var skipBtn = document.getElementById('skip-intro');
    var playBtn = document.getElementById('play-intro-btn');

    if (!overlay || !video) {
        startGame();
        return;
    }

    var soundFiles = ['paper', 'office-background', 'typing'];
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

/* ────────────────────────────────────────────────────────
   Game start
   ──────────────────────────────────────────────────────── */

function startGame() {
    startTimer();
    startBackgroundMusic();
    showInstructions();
}

/* ────────────────────────────────────────────────────────
   Sound helpers
   ──────────────────────────────────────────────────────── */

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

/* ────────────────────────────────────────────────────────
   Timer
   ──────────────────────────────────────────────────────── */

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

/* ────────────────────────────────────────────────────────
   Flashing sequence
   ──────────────────────────────────────────────────────── */

function beginFlashing() {
    currentRound = generateBusinessRound();
    var items = currentRound.items;
    var flashEl = document.getElementById('flash-number');
    var progressEl = document.getElementById('flash-progress');
    var inputArea = document.getElementById('input-area');

    // Hide the input area during flashing
    inputArea.classList.remove('visible');

    var index = 0;

    function showNext() {
        if (index >= items.length) {
            // Flashing done — show input
            flashEl.textContent = '';
            flashEl.className = 'flash-number';
            progressEl.textContent = 'Done! Enter your answer below.';
            inputArea.classList.add('visible');
            document.getElementById('answer-input').focus();
            return;
        }

        var item = items[index];
        progressEl.textContent = 'Number ' + (index + 1) + ' of ' + items.length;

        // Set colour class
        var colorClass = 'flash-add';
        if (item.type === 'subtract') colorClass = 'flash-subtract';
        if (item.type === 'interest') colorClass = 'flash-interest';

        // Animate in
        flashEl.className = 'flash-number ' + colorClass;
        flashEl.textContent = item.display;

        // Force reflow, then add visible class for the transition
        void flashEl.offsetWidth;
        flashEl.classList.add('visible');

        // After ~2.5s fade out, then show next after 0.5s gap
        setTimeout(function () {
            flashEl.classList.remove('visible');
            setTimeout(function () {
                index++;
                showNext();
            }, 500);
        }, 2500);
    }

    showNext();
}

/* ────────────────────────────────────────────────────────
   Submit answer
   ──────────────────────────────────────────────────────── */

function submitAnswer() {
    if (hasSubmitted) return;
    var input = document.getElementById('answer-input');
    var userAnswer = parseFloat(input.value);

    if (isNaN(userAnswer)) {
        document.getElementById('feedback').textContent = 'Please enter a number before submitting.';
        return;
    }

    hasSubmitted = true;
    playSound('click');

    var correct = currentRound.correctAnswer;
    var errorPercent = 0;
    if (correct !== 0) {
        errorPercent = Math.abs((userAnswer - correct) / correct) * 100;
    } else {
        errorPercent = userAnswer === 0 ? 0 : 100;
    }

    // Accuracy: 100% if exact, decreasing by 10 per 1% error, min 0
    var accuracy = Math.max(0, Math.round(100 - errorPercent * 10));

    var timePenalty = 0;
    if (timerSeconds > 60) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 60) / 30) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    stopTimer();
    var timeTaken = timerSeconds;
    sessionStorage.setItem('gameType', 'business');
    sessionStorage.setItem('timeTaken', timeTaken.toString());
    sessionStorage.setItem('accuracy', accuracy.toString());
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('businessGameScore', score.toString());

    var submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
    }

    var feedbackEl = document.getElementById('feedback');
    if (accuracy >= 90) {
        playSound('success');
        feedbackEl.textContent = 'Great job! Your answer: $' + userAnswer.toFixed(2) +
            ' | Correct: $' + correct.toFixed(2) + ' | Score: ' + score + '/100';
    } else {
        playSound('failure');
        feedbackEl.textContent = 'Your answer: $' + userAnswer.toFixed(2) +
            ' | Correct: $' + correct.toFixed(2) + ' | Score: ' + score + '/100';
    }

    if (bgMusic) bgMusic.pause();

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 2000);
}

/* ────────────────────────────────────────────────────────
   UI helpers
   ──────────────────────────────────────────────────────── */

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

    // Start flashing after closing the instructions (first time only)
    if (!currentRound && !hasSubmitted) {
        beginFlashing();
    }
}
