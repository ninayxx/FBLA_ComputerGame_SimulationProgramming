const instructions_button = document.getElementById('instructions-btn');
const instructions_modal = document.getElementById('instructions-modal');
const close_instructions_button = document.getElementById('close-btn');

instructions_button.addEventListener('click', () => {
    instructions_modal.classList.add('show-modal');
});

close_instructions_button.addEventListener('click', () => {
    instructions_modal.classList.remove('show-modal');
});