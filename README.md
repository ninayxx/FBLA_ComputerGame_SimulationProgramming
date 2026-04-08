# Career Quest (FBLA Computer Game & Simulation Programming)

A computer simulation project for the 2025-2026 FBLA competition season. Career Quest is a collection of six interactive mini-games that let players explore different career paths while testing varying skill sets. 

## General Scoring System
Every mini-game calculates a final score out of 100 points, which rewards players with a variable star rating:
- **3 Stars:** > 85 points
- **2 Stars:** > 60 points
- **1 Star:** ≤ 60 points

The final score consists of two components across all games:
- **Accuracy (70 points max):** Game-specific metric evaluating how correctly the player completed the task.
- **Speed (30 points max):** A time-based component. Each mini-game has a different "grace period" calibrated to its subjective difficulty. Once the timer exceeds the grace period, a 5-point deduction is applied for every 30 seconds over the limit (down to a minimum of 0 speed points).

---

## Mini-Games Overview

### 1. Tech Career (Programming Challenge)
- **Description:** An embedded IDE challenge where players must write a functional JavaScript algorithm to solve a given logic prompt. The code is tested against 5 hidden edge-case parameters using `eval()`.
- **Scoring:**
  - **Accuracy:** Percentage of the 5 hidden test cases passed successfully.
  - **Speed:** 3-minute grace period (180 seconds), as this is the most cognitively demanding task.

### 2. Engineering Career (Circuit Builder)
- **Description:** A digital logic puzzle. Players build functional circuits to power a lightbulb correctly by dragging and dropping boolean logic gates (AND, OR, XOR, NAND) onto a circuit board and interacting with truth-table input switches.
- **Scoring:**
  - **Accuracy:** 100% if the built circuit successfully routes power to the bulb with the intended inputs; 0% otherwise.
  - **Speed:** 1.5-minute grace period (90 seconds).

### 3. Business Career (Mental Accounting)
- **Description:** A rapid-fire financial tracking simulation. Players must mentally keep track of a running budget as various numeric amounts flash on screen: Income (Green), Deductions (Red), and a final Interest Rate (Yellow) that multiplies the total.
- **Scoring:**
  - **Accuracy:** Scaled based on the margin of error between the player's submitted answer and the true mathematical total.
  - **Speed:** 2-minute grace period (120 seconds).

### 4. Art Career (Pixel Recreation)
- **Description:** A visual reconstruction challenge. Players are shown a pixel art reference and are given an integrated color palette system to faithfully redraw the artwork onto a blank grid.
- **Scoring:**
  - **Accuracy:** Evaluates the 1-to-1 percentage of correctly colored and positioned background grid pixels matched against the target sample grid.
  - **Speed:** 30-second grace period (30 seconds).

### 5. Medical Career (Patient Diagnosis)
- **Description:** An exploratory symptom-diagnosis simulation. Players review a complex patient chart and consult provided digital cheat sheets (Disease Reference & Pill Guide) to identify the correct medication to prescribe from a graphical selection.
- **Scoring:**
  - **Accuracy:** 100% for successfully identifying the correct corresponding medication pill on the first try; 0% otherwise.
  - **Speed:** 30-second grace period (30 seconds).

### 6. Customer Service Career (Grocery Bagging)
- **Description:** A high-speed spatial coordination task. Simulating checkout bagging, players are put under intense time pressure to drag and drop 15 separate physics-based grocery items from a right-hand shelf into a left-hand basket.
- **Scoring:**
  - **Accuracy:** Defaults to 100% since all 15 items must eventually physically enter the basket threshold to trigger the win condition.
  - **Speed:** Strict 15-second grace period (15 seconds), as this game represents the lowest cognitive load.
