let currentProblem = null;

document.addEventListener('DOMContentLoaded', () => {
    loadNewProblem();
});

function loadNewProblem() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentProblem = questions[randomIndex];

    document.getElementById('problem-title').innerText = currentProblem.title;
    document.getElementById('problem-desc').innerHTML = currentProblem.description + format(currentProblem.testCases);

    document.getElementById('code-editor').value = currentProblem.initialCode;

    const consoleDiv = document.getElementById('output-console');
    consoleDiv.innerHTML = 'Output will appear here...';
    consoleDiv.style.color = '#fff';
}

function runCode() {
    const userCode = document.getElementById('code-editor').value;
    const consoleDiv = document.getElementById('output-console');
    const functionName = userCode.match(/function\s+([\w]+)/)[1];

    try {
        const setupFunc = new Function(userCode + `\nreturn ${functionName};`);
        const userFunc = setupFunc();

        let allPassed = true;

        consoleDiv.innerHTML = '';

        currentProblem.testCases.forEach((testCase, index) => {
            const input = testCase.input;
            const expected = testCase.expected;

            const result = userFunc.apply(null, input);

            const resultStr = JSON.stringify(result);
            const expectedStr = JSON.stringify(expected);

            if (resultStr === expectedStr) {
                consoleDiv.innerHTML += `<div style="color: lightgreen;">Test Case ${index + 1}: Passed! (${resultStr})</div>`;
            } else {
                consoleDiv.innerHTML += `<div style="color: coral;">Test Case ${index + 1}: Failed. Expected ${expectedStr}, got ${resultStr}</div>`;
                allPassed = false;
            }
        });

        if (allPassed) {
            consoleDiv.innerHTML += `<div style="color: gold; margin-top: 10px; font-weight: bold;">ALL TESTS PASSED! +100 PTS</div>`;
        }

    } catch (err) {
        consoleDiv.innerText = "Error: " + err.message;
        consoleDiv.style.color = "red";
    }
}

function submitCode() {
    runCode();
}

function format(testCases) {
    const examples = testCases.slice(0, 5).map((test, index) => {
        return `
        <div class="example-box" style="margin-top: 10px; padding:8px; background: #ffffffff; border-radius: 5px; border: 1px solid #525252ff; font-family: monospace; font-size: 0.9em;">
            <strong>Example ${index + 1}:</strong><br>
            <span style="color: #9cdcfe">Input:</span> ${JSON.stringify(test.input)}<br>
            <span style="color: #ce9178">Expected:</span> ${JSON.stringify(test.expected)}
        </div>`;
    }).join('');
    return `<h3 style="margin-top: 20px; color: #4e4e4eff;">Examples:</h3>` + examples;
}

const editor = document.getElementById('code-editor');

editor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
    }
})
