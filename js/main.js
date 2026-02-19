var instructions_button = document.getElementById('instructions-btn');
var instructions_modal = document.getElementById('instructions-modal');
var close_instructions_button = document.getElementById('close-btn');

instructions_button.addEventListener('click', function () {
    playSound('click');
    instructions_modal.classList.add('show-modal');
});

close_instructions_button.addEventListener('click', function () {
    playSound('click');
    instructions_modal.classList.remove('show-modal');
});

var bgMusic = null;

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash === '#job-select') {
        showJobSelect();
    }
    renderAllStars();
    startBackgroundMusic();
});

function startBackgroundMusic() {
    if (bgMusic && !bgMusic.paused) return;
    bgMusic = new Audio('assets/audio/music/background.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.2;
    var playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.catch(function () {
            document.addEventListener('click', function tryPlay() {
                if (bgMusic) {
                    bgMusic.play().catch(function () { });
                }
                document.removeEventListener('click', tryPlay);
            }, { once: false });
        });
    }
}

function changeScreen() {
    playSound('click');
    backgroundTransition('assets/images/locations/job-selection-background.png', function () {
        showJobSelect();
    });
}

function showJobSelect() {
    var startScreen = document.getElementById('start-screen');
    var jobSelectScreen = document.getElementById('job-select');
    var mainContainer = document.getElementById('mainContainer');
    var bodyContainer = document.getElementById('bodyContainer');
    var header = document.querySelector('header');
    startScreen.style.display = 'none';
    header.style.display = 'none';
    jobSelectScreen.style.display = 'block';
    mainContainer.style.backgroundColor = 'transparent';
    mainContainer.style.boxShadow = 'none';
    mainContainer.style.padding = '0';
    mainContainer.style.width = '100%';
    mainContainer.style.maxWidth = '100%';
    mainContainer.style.borderRadius = '0';
    bodyContainer.style.backgroundImage = "url('assets/images/locations/job-selection-background.png')";
    bodyContainer.style.backgroundSize = '100% 100%';
    bodyContainer.style.alignItems = 'stretch';
    bodyContainer.style.padding = '0';
    renderAllStars();
    if (!bgMusic || bgMusic.paused) {
        startBackgroundMusic();
    }
}

function goBackToHome() {
    playSound('click');
    var startScreen = document.getElementById('start-screen');
    var jobSelectScreen = document.getElementById('job-select');
    var mainContainer = document.getElementById('mainContainer');
    var bodyContainer = document.getElementById('bodyContainer');
    var header = document.querySelector('header');
    jobSelectScreen.style.display = 'none';
    startScreen.style.display = 'flex';
    header.style.display = 'block';
    mainContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    mainContainer.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
    mainContainer.style.padding = '60px';
    mainContainer.style.width = '60%';
    mainContainer.style.maxWidth = '1000px';
    mainContainer.style.borderRadius = '20px';
    bodyContainer.style.backgroundImage = "url('assets/images/locations/background.jpg')";
    bodyContainer.style.backgroundSize = 'cover';
    bodyContainer.style.alignItems = 'center';
    bodyContainer.style.padding = '';
    window.location.hash = '';
}

function backgroundTransition(newURL, callback) {
    var bodyContainer = document.getElementById('bodyContainer');
    var overlay = document.getElementById('transition-overlay');
    overlay.style.opacity = '1';
    setTimeout(function () {
        if (callback) callback();
        bodyContainer.style.backgroundImage = 'url(' + newURL + ')';
        overlay.style.opacity = '0';
    }, 500);
}

function renderAllStars() {
    var techScore = parseInt(sessionStorage.getItem('techGameScore') || '0');
    var engScore = parseInt(sessionStorage.getItem('engGameScore') || '0');
    renderStarRating('tech-stars', techScore);
    renderStarRating('eng-stars', engScore);
}

function renderStarRating(containerId, score) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (score === 0) {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'flex';

    var starCount = (score / 100) * 3;

    for (var i = 0; i < 3; i++) {
        var wrapper = document.createElement('div');
        wrapper.className = 'star-wrapper';

        var bgImg = document.createElement('img');
        bgImg.src = 'assets/images/items/star.png';
        bgImg.className = 'star-bg';
        bgImg.alt = '';
        wrapper.appendChild(bgImg);

        var fillImg = document.createElement('img');
        fillImg.src = 'assets/images/items/star.png';
        fillImg.className = 'star-fill';
        fillImg.alt = '';

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

function playSound(name) {
    try {
        var audio = new Audio('assets/audio/sfx/' + name + '.mp3');
        audio.volume = 0.4;
        audio.play().catch(function () { });
    } catch (e) { }
}
