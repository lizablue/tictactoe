let cells = document.querySelectorAll('.row > div'); // select all the cells
let results = document.querySelector('#result');

// listen for click
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let turn = "X"

// populate cells and prevent cheating
function cellClicked() {
    if (event.target.textContent !== "") {
        return;
    } 

    event.target.textContent = turn;

    // result = document.getElementById('#h3');

    if (checkCombo(0, 1, 2)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(3, 4, 5)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(6, 7, 8)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(0, 3, 6)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(1, 4, 7)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(2, 5, 8)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(0, 4, 8)) {
        results.textContent = "WINNER: " + turn
    } else if (checkCombo(2, 4, 6)) {
        results.textContent = "WINNER: " + turn
    }
    if (result.length > 0) {
        return;
    }
    togglePlayer();
};

// alternate turns between 2 different values (X and O)
function togglePlayer() {
    if (turn === "O") {
        turn = "X"
    } else {
        turn = "O"
    }
};

// check for winners based on combinations
function checkCombo(a, b, c) {
    if (cells[a].textContent === turn && cells[b].textContent === turn && cells[c].textContent === turn) {
        return true;
    } else {
        return false;
    }
};

// HINTS
// if else statements are your friend
// cells[0].textContent
// comparison operators
// ===
// if(conditionOne && conditionTwo || consitionThree);