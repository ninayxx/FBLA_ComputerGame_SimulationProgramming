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
    const startScreen = document.getElementById('start-screen');
    const jobSelectScreen = document.getElementById('job-select');
    const mainContainer = document.getElementById('mainContainer');
    const bodyContainer = document.getElementById('bodyContainer');
    const header = document.querySelector('header');

    startScreen.style.display = 'none';
    header.style.display = 'none';
    jobSelectScreen.style.display = 'block';
    bodyContainer.style.backgroundImage = 'url(../assets/images/locations/job-selection-background.png)';
    bodyContainer.style.backgroundSize = '100% 100%';
    bodyContainer.style.alignItems = 'flex-start';
    bodyContainer.style.paddingTop = '50px';
    mainContainer.style.backgroundColor = 'transparent';
    mainContainer.style.boxShadow = 'none';
}