
function generateBusinessRound() {
    var greenCount = randomInt(2, 4);  
    var redCount = randomInt(1, 3);    
    var yellowCount = 1;               

    var items = [];

    for (var i = 0; i < greenCount; i++) {
        var amount = randomInt(1, 50) * 100;
        items.push({ value: amount, type: 'add', display: '$' + amount.toLocaleString() });
    }

    for (var j = 0; j < redCount; j++) {
        var subAmount = randomInt(1, 20) * 100;
        items.push({ value: subAmount, type: 'subtract', display: '$' + subAmount.toLocaleString() });
    }

    var rate = randomInt(1, 15);
    items.push({ value: rate, type: 'interest', display: rate + '%' });

    var dollarItems = items.filter(function (it) { return it.type !== 'interest'; });
    var interestItems = items.filter(function (it) { return it.type === 'interest'; });

    dollarItems = shuffleArr(dollarItems);

    var insertPos = randomInt(Math.floor(dollarItems.length / 2), dollarItems.length);
    dollarItems.splice(insertPos, 0, interestItems[0]);

    var orderedItems = dollarItems;

    // Simulate the running total and cap subtractions so it never goes negative
    var runningTotal = 0;
    for (var k = 0; k < orderedItems.length; k++) {
        if (orderedItems[k].type === 'add') {
            runningTotal += orderedItems[k].value;
        } else if (orderedItems[k].type === 'subtract') {
            // Cap the subtraction so total doesn't drop below 0
            if (orderedItems[k].value > runningTotal) {
                orderedItems[k].value = runningTotal;
                orderedItems[k].display = '$' + runningTotal.toLocaleString();
            }
            runningTotal -= orderedItems[k].value;
        } else if (orderedItems[k].type === 'interest') {
            runningTotal = runningTotal * (1 + orderedItems[k].value / 100);
        }
    }

    // Recalculate the correct answer from the final ordered items
    var total = 0;
    for (var m = 0; m < orderedItems.length; m++) {
        if (orderedItems[m].type === 'add') {
            total += orderedItems[m].value;
        } else if (orderedItems[m].type === 'subtract') {
            total -= orderedItems[m].value;
        } else if (orderedItems[m].type === 'interest') {
            total = total * (1 + orderedItems[m].value / 100);
        }
    }

    var answer = Math.round(total * 100) / 100;

    return {
        items: orderedItems,
        correctAnswer: answer
    };
}


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
