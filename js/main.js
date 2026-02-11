const instructions_button = document.getElementById('instructions-btn');
const instructions_modal = document.getElementById('instructions-modal');
const close_instructions_button = document.getElementById('close-btn');

instructions_button.addEventListener('click', () => {
    instructions_modal.classList.add('show-modal');
});

close_instructions_button.addEventListener('click', () => {
    instructions_modal.classList.remove('show-modal');
});

function changeScreen() {
    backgroundTransition('../assets/images/locations/job-selection-background.png', () => {
        const startScreen = document.getElementById('start-screen');
        const jobSelectScreen = document.getElementById('job-select');
        const mainContainer = document.getElementById('mainContainer');
        const bodyContainer = document.getElementById('bodyContainer');
        const header = document.querySelector('header');
        startScreen.style.display = 'none';
        header.style.display = 'none';
        jobSelectScreen.style.display = 'block';
        mainContainer.style.backgroundColor = 'transparent';
        mainContainer.style.boxShadow = 'none';
        bodyContainer.style.backgroundSize = '100% 100%';
        bodyContainer.style.alignItems = 'flex-start';
        bodyContainer.style.paddingTop = '60px';
    });
}

function changeTechScreen() {
    backgroundTransition('../assets/images/locations/tech-job-background.png', () => {
        const jobSelectScreen = document.getElementById('job-select');
        const techJobScreen = document.getElementById('tech-job-screen');
        const bodyContainer = document.getElementById('bodyContainer');
        jobSelectScreen.style.display = 'none';
        techJobScreen.style.display = 'block';
        bodyContainer.style.backgroundSize = '100% 100%';
        bodyContainer.style.alignItems = 'flex-start';
        bodyContainer.style.paddingTop = '60px';
    });
}

function backgroundTransition(newURL, callback) {

    const bodyContainer = document.getElementById('bodyContainer');
    const overlay = document.getElementById('transition-overlay');
    overlay.style.opacity = '1';
    setTimeout(() => {
        if (callback) {
            callback();
        }
        bodyContainer.style.backgroundImage = `url(${newURL})`;
        overlay.style.opacity = '0';
    }, 500);
}    
