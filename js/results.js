document.addEventListener('DOMContentLoaded', function () {
    var gameType = localStorage.getItem('gameType') || 'unknown';
    var timeTaken = parseInt(localStorage.getItem('timeTaken') || '0');
    var accuracy = parseFloat(localStorage.getItem('accuracy') || '0');
    var score = parseInt(localStorage.getItem('score') || '0');

    var minutes = Math.floor(timeTaken / 60);
    var seconds = timeTaken % 60;
    document.getElementById('time-display').textContent =
        String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');

    document.getElementById('accuracy-display').textContent = Math.round(accuracy) + '%';

    animateScore(score);
    renderStars(score);

    if (gameType === 'eng') {
        localStorage.setItem('engGameScore', score);
    } else if (gameType === 'tech') {
        localStorage.setItem('techGameScore', score);
    }

    playResultSound(score);
});

function animateScore(target) {
    var current = 0;
    var scoreEl = document.getElementById('score-number');
    var interval = setInterval(function () {
        current += 1;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        scoreEl.textContent = current;
    }, 15);
}

function renderStars(score) {
    var container = document.getElementById('star-display');
    container.innerHTML = '';
    var starCount = (score / 100) * 3;

    for (var i = 0; i < 3; i++) {
        var wrapper = document.createElement('div');
        wrapper.className = 'star-wrapper';

        var bgImg = document.createElement('img');
        bgImg.src = '../assets/images/items/star.png';
        bgImg.className = 'star-bg';
        bgImg.alt = 'star background';
        wrapper.appendChild(bgImg);

        var fillImg = document.createElement('img');
        fillImg.src = '../assets/images/items/star.png';
        fillImg.className = 'star-fill';
        fillImg.alt = 'star fill';

        var fillAmount = 0;
        if (starCount >= i + 1) {
            fillAmount = 100;
        } else if (starCount > i) {
            fillAmount = (starCount - i) * 100;
        }

        fillImg.style.setProperty('--clip-right', (100 - fillAmount) + '%');
        wrapper.appendChild(fillImg);
        container.appendChild(wrapper);
    }
}

function playResultSound(score) {
    try {
        var soundFile = score >= 50 ? '../assets/audio/sfx/success.mp3' : '../assets/audio/sfx/failure.mp3';
        var audio = new Audio(soundFile);
        audio.volume = 0.5;
        audio.play().catch(function () { });
    } catch (e) { }
}

function goToJobSelect() {
    playSound('click');
    window.location.href = 'index.html#job-select';
}

function playSound(name) {
    try {
        var audio = new Audio('../assets/audio/sfx/' + name + '.mp3');
        audio.volume = 0.4;
        audio.play().catch(function () { });
    } catch (e) { }
}
