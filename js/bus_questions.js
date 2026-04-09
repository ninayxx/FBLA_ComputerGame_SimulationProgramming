
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
    answer = Math.round(answer * 100) / 100;

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
