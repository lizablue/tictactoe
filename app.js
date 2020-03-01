let cells = document.querySelectorAll('.row > div'); // select all the cells
let results = document.querySelector('#result'); // select element to display results

// listen for click
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let turn = "X"

// document game play
function cellClicked() {
    if (results.textContent.length > 0) {
        location.reload(false);
        return;
    }

    // prevent cheating
    if (event.target.textContent !== "") {
        return;
    }

    // populate cells
    event.target.textContent = turn;

    // announce results
    if (checkCombo(0, 1, 2)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(3, 4, 5)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(6, 7, 8)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(0, 3, 6)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(1, 4, 7)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(2, 5, 8)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(0, 4, 8)) {
        results.textContent = "WINNER: " + turn;
    } else if (checkCombo(2, 4, 6)) {
        results.textContent = "WINNER: " + turn;
    } else if (drawGame(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
        results.textContent = "DRAW"
    };

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

// check for draw
function drawGame(a, b, c, d, e, f, g, h, i) {
    if (cells[a].textContent !== ""
        && cells[b].textContent !== ""
        && cells[c].textContent !== ""
        && cells[d].textContent !== ""
        && cells[e].textContent !== ""
        && cells[f].textContent !== ""
        && cells[g].textContent !== ""
        && cells[h].textContent !== ""
        && cells[i].textCOntent !== "") {
        return true;
    } else {
        return false;
    }
};