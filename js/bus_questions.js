/**
 * Business Game — Question Generator
 *
 * Generates a randomised round of ~7 flash items.
 *   - Green items  → dollar amounts to ADD
 *   - Red items    → dollar amounts to SUBTRACT
 *   - Yellow items → interest-rate percentages (applied at the end as a multiplier)
 *
 * The correct answer is:
 *   (sum of green − sum of red) × product of (1 + rate/100) for each yellow item
 *
 * All dollar amounts are whole numbers; the final answer is rounded to 2 decimals.
 */

function generateBusinessRound() {
    // Decide how many of each type (total ≈ 7)
    var greenCount = randomInt(2, 4);   // 2-4 additions
    var redCount = randomInt(1, 3);     // 1-3 subtractions
    var yellowCount = 1;                // exactly 1 interest rate

    var items = [];

    // Green (add) items
    for (var i = 0; i < greenCount; i++) {
        var amount = randomInt(1, 50) * 100; // $100 – $5000 in $100 steps
        items.push({ value: amount, type: 'add', display: '$' + amount.toLocaleString() });
    }

    // Red (subtract) items — keep each one smaller so the running total stays positive
    for (var j = 0; j < redCount; j++) {
        var subAmount = randomInt(1, 20) * 100; // $100 – $2000
        items.push({ value: subAmount, type: 'subtract', display: '$' + subAmount.toLocaleString() });
    }

    // Yellow (interest rate) item
    var rate = randomInt(1, 15); // 1% – 15%
    items.push({ value: rate, type: 'interest', display: rate + '%' });

    // Shuffle the items (but keep the interest rate somewhere in the middle-to-end)
    var dollarItems = items.filter(function (it) { return it.type !== 'interest'; });
    var interestItems = items.filter(function (it) { return it.type === 'interest'; });

    dollarItems = shuffleArr(dollarItems);

    // Insert the interest rate at a random position in the second half
    var insertPos = randomInt(Math.floor(dollarItems.length / 2), dollarItems.length);
    dollarItems.splice(insertPos, 0, interestItems[0]);

    var orderedItems = dollarItems;

    // Calculate correct answer
    var addTotal = 0;
    var subTotal = 0;
    var rateMult = 1;
    for (var k = 0; k < orderedItems.length; k++) {
        if (orderedItems[k].type === 'add') {
            addTotal += orderedItems[k].value;
        } else if (orderedItems[k].type === 'subtract') {
            subTotal += orderedItems[k].value;
        } else if (orderedItems[k].type === 'interest') {
            rateMult *= (1 + orderedItems[k].value / 100);
        }
    }

    var answer = (addTotal - subTotal) * rateMult;
    answer = Math.round(answer * 100) / 100; // round to 2 decimals

    return {
        items: orderedItems,
        correctAnswer: answer
    };
}

/* ── helpers ───────────────────────────────────────────── */

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArr(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}
