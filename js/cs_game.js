var TOTAL_ITEMS = 15;
var basketCount = 0;
var timerSeconds = 0;
var timerInterval = null;
var bgMusic = null;
var tickSound = null;
var soundPool = {};
var hasSubmitted = false;
var introAudios = [];

/* ── Grocery catalogue ─────────────────────────────── */

var groceryItems = [
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🍌', name: 'Banana' },
    { emoji: '🥖', name: 'Bread' },
    { emoji: '🧀', name: 'Cheese' },
    { emoji: '🥛', name: 'Milk' },
    { emoji: '🥚', name: 'Eggs' },
    { emoji: '🍅', name: 'Tomato' },
    { emoji: '🥕', name: 'Carrot' },
    { emoji: '🫐', name: 'Blueberry' },
    { emoji: '🍇', name: 'Grapes' },
    { emoji: '🥦', name: 'Broccoli' },
    { emoji: '🌽', name: 'Corn' },
    { emoji: '🍞', name: 'Toast' },
    { emoji: '🧈', name: 'Butter' },
    { emoji: '🍗', name: 'Chicken' },
    { emoji: '🥩', name: 'Steak' },
    { emoji: '🐟', name: 'Fish' },
    { emoji: '🍊', name: 'Orange' },
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '🍋', name: 'Lemon' },
    { emoji: '🫛', name: 'Peas' },
    { emoji: '🧅', name: 'Onion' },
    { emoji: '🥔', name: 'Potato' },
    { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🫘', name: 'Beans' }
];

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

    var soundFiles = ['checkout'];
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

/* ────────────────────────────────────────────────────────
   Game start
   ──────────────────────────────────────────────────────── */

function startGame() {
    startTimer();
    startBackgroundMusic();
    buildShelf();
    setupBasketDropZone();
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
   Build shelf — pick TOTAL_ITEMS random groceries
   ──────────────────────────────────────────────────────── */

function buildShelf() {
    var shelf = document.getElementById('items-shelf');
    shelf.innerHTML = '';

    // Pick random items
    var pool = groceryItems.slice();
    for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i];
        pool[i] = pool[j];
        pool[j] = tmp;
    }
    var chosen = pool.slice(0, TOTAL_ITEMS);

    document.getElementById('basket-total').textContent = TOTAL_ITEMS;

    chosen.forEach(function (item, index) {
        var card = createGroceryCard(item, index);
        shelf.appendChild(card);
    });
}

function createGroceryCard(item, index) {
    var card = document.createElement('div');
    card.className = 'grocery-item';
    card.setAttribute('draggable', 'true');
    card.dataset.index = index;
    card.dataset.name = item.name;

    var emoji = document.createElement('div');
    emoji.className = 'item-emoji';
    emoji.textContent = item.emoji;

    var name = document.createElement('div');
    name.className = 'item-name';
    name.textContent = item.name;

    card.appendChild(emoji);
    card.appendChild(name);

    // Drag events
    card.addEventListener('dragstart', function (e) {
        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain', index.toString());
        e.dataTransfer.effectAllowed = 'move';
    });

    card.addEventListener('dragend', function () {
        card.classList.remove('dragging');
    });

    // Touch support
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchEnd, { passive: false });

    return card;
}

/* ────────────────────────────────────────────────────────
   Touch drag support
   ──────────────────────────────────────────────────────── */

var touchDragEl = null;
var touchOffsetX = 0;
var touchOffsetY = 0;
var touchClone = null;

function handleTouchStart(e) {
    if (hasSubmitted) return;
    var card = e.currentTarget;
    if (card.classList.contains('in-basket')) return;

    e.preventDefault();
    touchDragEl = card;
    var touch = e.touches[0];
    var rect = card.getBoundingClientRect();
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;

    // Create a floating clone
    touchClone = card.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.zIndex = '9000';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.opacity = '0.85';
    touchClone.style.width = rect.width + 'px';
    touchClone.style.height = rect.height + 'px';
    touchClone.style.left = (touch.clientX - touchOffsetX) + 'px';
    touchClone.style.top = (touch.clientY - touchOffsetY) + 'px';
    document.body.appendChild(touchClone);

    card.classList.add('dragging');
}

function handleTouchMove(e) {
    if (!touchDragEl || !touchClone) return;
    e.preventDefault();
    var touch = e.touches[0];
    touchClone.style.left = (touch.clientX - touchOffsetX) + 'px';
    touchClone.style.top = (touch.clientY - touchOffsetY) + 'px';

    // Highlight basket zone
    var basket = document.getElementById('basket-zone');
    var basketRect = basket.getBoundingClientRect();
    if (touch.clientX >= basketRect.left && touch.clientX <= basketRect.right &&
        touch.clientY >= basketRect.top && touch.clientY <= basketRect.bottom) {
        basket.classList.add('drag-over');
    } else {
        basket.classList.remove('drag-over');
    }
}

function handleTouchEnd(e) {
    if (!touchDragEl || !touchClone) return;
    e.preventDefault();
    var touch = e.changedTouches[0];

    var basket = document.getElementById('basket-zone');
    var basketRect = basket.getBoundingClientRect();
    basket.classList.remove('drag-over');

    if (touch.clientX >= basketRect.left && touch.clientX <= basketRect.right &&
        touch.clientY >= basketRect.top && touch.clientY <= basketRect.bottom) {
        moveToBasket(touchDragEl);
    }

    touchDragEl.classList.remove('dragging');
    if (touchClone && touchClone.parentNode) {
        touchClone.parentNode.removeChild(touchClone);
    }
    touchDragEl = null;
    touchClone = null;
}

/* ────────────────────────────────────────────────────────
   Basket drop zone
   ──────────────────────────────────────────────────────── */

function setupBasketDropZone() {
    var basket = document.getElementById('basket-zone');

    basket.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        basket.classList.add('drag-over');
    });

    basket.addEventListener('dragleave', function () {
        basket.classList.remove('drag-over');
    });

    basket.addEventListener('drop', function (e) {
        e.preventDefault();
        basket.classList.remove('drag-over');

        var index = e.dataTransfer.getData('text/plain');
        var shelf = document.getElementById('items-shelf');
        var card = shelf.querySelector('[data-index="' + index + '"]');
        if (card && !card.classList.contains('in-basket')) {
            moveToBasket(card);
        }
    });
}

function moveToBasket(card) {
    if (hasSubmitted) return;
    if (card.classList.contains('in-basket')) return;

    playSound('drop');

    // Remove from shelf, add to basket
    var basket = document.getElementById('basket-zone');
    var hint = basket.querySelector('.basket-hint');
    if (hint) hint.style.display = 'none';

    card.classList.add('in-basket');
    card.setAttribute('draggable', 'false');
    card.classList.remove('dragging');
    basket.appendChild(card);

    basketCount++;
    document.getElementById('basket-count').textContent = basketCount;

    // Enable submit when all items are in basket
    if (basketCount >= TOTAL_ITEMS) {
        document.getElementById('submit-btn').disabled = false;
    }
}

/* ────────────────────────────────────────────────────────
   Submit
   ──────────────────────────────────────────────────────── */

function submitOrder() {
    if (hasSubmitted) return;
    if (basketCount < TOTAL_ITEMS) {
        document.getElementById('feedback').textContent = 'Drag all items into the basket first!';
        return;
    }
    hasSubmitted = true;
    playSound('click');

    var accuracy = 100; // All items in basket = perfect accuracy

    var timePenalty = 0;
    if (timerSeconds > 60) {
        timePenalty = Math.min(30, Math.floor((timerSeconds - 60) / 30) * 5);
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

    var submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
    }

    playSound('success');
    document.getElementById('feedback').textContent =
        'Order complete! Score: ' + score + '/100';

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
}
