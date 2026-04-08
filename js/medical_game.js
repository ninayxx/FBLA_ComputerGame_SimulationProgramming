var currentQuestion = null;
var selectedPill = null;
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

    var soundFiles = ['heart-monitor', 'office-background'];
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
    loadPatient();
    buildReferenceModals();
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

function loadPatient() {
    var randomIndex = Math.floor(Math.random() * medicalQuestions.length);
    currentQuestion = medicalQuestions[randomIndex];
    selectedPill = null;
    hasSubmitted = false;

    var submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }

    // Render patient info
    document.getElementById('patient-name').textContent = currentQuestion.patientName;
    document.getElementById('patient-age').textContent = 'Age: ' + currentQuestion.age;

    // Render symptoms
    var symptomList = document.getElementById('symptom-list');
    symptomList.innerHTML = '';
    currentQuestion.symptoms.forEach(function (symptom) {
        var li = document.createElement('li');
        li.className = 'symptom-item';
        li.textContent = symptom;
        symptomList.appendChild(li);
    });

    // Render pill choices (shuffled)
    var pillGrid = document.getElementById('pill-grid');
    pillGrid.innerHTML = '';
    var shuffledPills = shuffleArray(pillGuide.slice());
    shuffledPills.forEach(function (pill) {
        var card = document.createElement('div');
        card.className = 'pill-card';
        card.dataset.pill = pill.pill;

        var icon = document.createElement('div');
        icon.className = 'pill-icon';
        icon.style.backgroundColor = pill.color;

        var name = document.createElement('div');
        name.className = 'pill-name';
        name.textContent = pill.pill;

        card.appendChild(icon);
        card.appendChild(name);

        card.addEventListener('click', function () {
            if (hasSubmitted) return;
            playSound('click');
            selectedPill = pill.pill;
            document.querySelectorAll('.pill-card').forEach(function (c) {
                c.classList.remove('selected');
            });
            card.classList.add('selected');
        });

        pillGrid.appendChild(card);
    });

    document.getElementById('feedback').textContent = '';
}

function submitDiagnosis() {
    if (hasSubmitted) return;
    if (!selectedPill) {
        document.getElementById('feedback').textContent = 'Please select a pill before submitting.';
        return;
    }
    hasSubmitted = true;
    playSound('click');

    var isCorrect = selectedPill === currentQuestion.correctPill;
    var accuracy = isCorrect ? 100 : 0;

    // Visual feedback on pills
    document.querySelectorAll('.pill-card').forEach(function (card) {
        if (card.dataset.pill === currentQuestion.correctPill) {
            card.classList.add('correct');
        } else if (card.classList.contains('selected')) {
            card.classList.add('wrong');
        }
    });

    var timePenalty = 0;
    if (timerSeconds > 90) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 90) / 30) * 5);
    }
    var timeScore = 30 - timePenalty;
    var score = Math.round((accuracy / 100) * 70 + timeScore);
    score = Math.max(0, Math.min(100, score));

    stopTimer();
    var timeTaken = timerSeconds;
    sessionStorage.setItem('gameType', 'medical');
    sessionStorage.setItem('timeTaken', timeTaken.toString());
    sessionStorage.setItem('accuracy', accuracy.toString());
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('medicalGameScore', score.toString());

    var submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
    }

    if (isCorrect) {
        playSound('success');
        document.getElementById('feedback').textContent =
            'Correct! Score: ' + score + '/100';
    } else {
        playSound('failure');
        document.getElementById('feedback').textContent =
            'Incorrect. The correct pill was ' + currentQuestion.correctPill + '. Score: ' + score + '/100';
    }

    if (bgMusic) bgMusic.pause();

    setTimeout(function () {
        window.location.href = 'results.html';
    }, 2000);
}

function buildReferenceModals() {
    // Disease Reference
    var diseaseContent = document.getElementById('disease-ref-content');
    diseaseContent.innerHTML = '';
    diseaseReference.forEach(function (d) {
        var card = document.createElement('div');
        card.className = 'ref-card';
        card.innerHTML =
            '<h4>' + d.disease + '</h4>' +
            '<p><strong>Symptoms:</strong> ' + d.symptoms.join(', ') + '</p>';
        diseaseContent.appendChild(card);
    });

    // Pill Guide
    var pillContent = document.getElementById('pill-guide-content');
    pillContent.innerHTML = '';
    pillGuide.forEach(function (p) {
        var card = document.createElement('div');
        card.className = 'ref-card';
        card.innerHTML =
            '<h4><span class="pill-dot" style="background-color:' + p.color + '"></span>' +
            p.pill + '</h4>' +
            '<p><strong>Treats:</strong> ' + p.treats + '</p>' +
            '<p>' + p.description + '</p>';
        pillContent.appendChild(card);
    });
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
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

function showDiseaseRef() {
    playSound('click');
    var modal = document.getElementById('disease-ref-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideDiseaseRef() {
    playSound('click');
    var modal = document.getElementById('disease-ref-modal');
    if (modal) modal.classList.add('hidden');
}

function showPillGuide() {
    playSound('click');
    var modal = document.getElementById('pill-guide-modal');
    if (modal) modal.classList.remove('hidden');
}

function hidePillGuide() {
    playSound('click');
    var modal = document.getElementById('pill-guide-modal');
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
