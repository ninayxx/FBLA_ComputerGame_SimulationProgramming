let currentQuestion = null;
let selectedColor = null;
let userGrid = [];
let gameStats = { attempts: 0, bestScore: 0 };

function initArtGame() {
    document.getElementById('exit-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    document.getElementById('clear-btn').addEventListener('click', clearPlayerGrid);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    nextQuestion();
}

function nextQuestion() {
    currentQuestion = getRandomArtQuestion();
    selectedColor = currentQuestion.palette[1] || '#000000';
    buildPalette(currentQuestion.palette);
    renderSampleGrid();
    buildPlayerGrid();
    setFeedback('New challenge loaded: ' + currentQuestion.title + '. Copy the pattern exactly.');
    updateScoreboard();
    sessionStorage.setItem('artGameScore', '0');
}

function buildPalette(palette) {
    const paletteContainer = document.getElementById('tool-palette');
    paletteContainer.innerHTML = '';
    palette.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.className = 'palette-swatch';
        swatch.style.backgroundColor = color;
        swatch.title = color;
        swatch.addEventListener('click', function () {
            selectedColor = color;
            document.getElementById('selected-color-code').textContent = color;
            document.getElementById('target-color-indicator').style.backgroundColor = color;
            document.querySelectorAll('.palette-swatch').forEach(el => el.classList.remove('selected'));
            swatch.classList.add('selected');
        });
        if (index === 0) {
            swatch.classList.add('selected');
            selectedColor = color;
            document.getElementById('selected-color-code').textContent = color;
            document.getElementById('target-color-indicator').style.backgroundColor = color;
        }
        paletteContainer.appendChild(swatch);
    });
}

function renderSampleGrid() {
    const sampleContainer = document.getElementById('sample-grid');
    sampleContainer.innerHTML = '';
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    sampleContainer.style.gridTemplateColumns = `repeat(${cols}, 36px)`;
    sampleContainer.style.gridTemplateRows = `repeat(${rows}, 36px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            const colorCode = currentQuestion.pattern[r][c];
            cell.style.backgroundColor = getColorFromPalette(colorCode, currentQuestion.palette);
            sampleContainer.appendChild(cell);
        }
    }
}

function buildPlayerGrid() {
    const playerContainer = document.getElementById('player-grid');
    playerContainer.innerHTML = '';
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    userGrid = [];

    playerContainer.style.gridTemplateColumns = `repeat(${cols}, 36px)`;
    playerContainer.style.gridTemplateRows = `repeat(${rows}, 36px)`;

    for (let r = 0; r < rows; r++) {
        userGrid[r] = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.style.backgroundColor = '#FFFFFF';
            userGrid[r][c] = null;

            cell.addEventListener('click', function () {
                userGrid[r][c] = selectedColor;
                cell.style.backgroundColor = selectedColor;
                cell.classList.add('filled');
                cell.classList.remove('correct', 'wrong');
            });

            playerContainer.appendChild(cell);
        }
    }
}

function clearPlayerGrid() {
    const playerContainer = document.getElementById('player-grid');
    const cells = playerContainer.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFFFFF';
        cell.classList.remove('filled', 'correct', 'wrong');
    });

    for (let r = 0; r < currentQuestion.rows; r++) {
        for (let c = 0; c < currentQuestion.cols; c++) {
            userGrid[r][c] = null;
        }
    }
    setFeedback('Grid reset. Keep going!');
}

function checkAnswer() {
    const rows = currentQuestion.rows;
    const cols = currentQuestion.cols;
    let matched = 0;
    let total = rows * cols;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const targetColor = getColorFromPalette(currentQuestion.pattern[r][c], currentQuestion.palette);
            const enteredColor = userGrid[r][c] || '#FFFFFF';
            const cellSelector = `[data-row='${r}'][data-col='${c}']`;
            const cell = document.querySelector('#player-grid ' + cellSelector);

            if (enteredColor.toLowerCase() === targetColor.toLowerCase()) {
                matched++;
                cell.classList.add('correct');
                cell.classList.remove('wrong');
            } else {
                cell.classList.add('wrong');
                cell.classList.remove('correct');
            }
        }
    }

    const percentage = Math.round((matched / total) * 100);
    gameStats.attempts++;

    if (percentage > gameStats.bestScore) {
        gameStats.bestScore = percentage;
    }

    sessionStorage.setItem('artGameScore', String(Math.max(gameStats.bestScore, 0)));

    if (matched === total) {
        setFeedback(`Perfect! ${matched}/${total} cells correct. Score ${percentage}%. Click Next for new art.`);
    } else {
        setFeedback(`Almost there: ${matched}/${total} correct (${percentage}%). Fix the red cells or press Next.`);
    }

    updateScoreboard();
}

function setFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.textContent = `Challenge: ${currentQuestion.title} | Attempts: ${gameStats.attempts} | Best: ${gameStats.bestScore}%`;
}

document.addEventListener('DOMContentLoaded', initArtGame);
