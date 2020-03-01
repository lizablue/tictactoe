let cells = document.querySelectorAll('.row > div'); // select all the cells

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
        console.log("WINNER: " + turn);
    } else if (checkCombo(3, 4, 5)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(6, 7, 8)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(0, 3, 6)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(1, 4, 7)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(2, 5, 8)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(0, 4, 8)) {
        console.log("WINNER: " + turn);
    } else if (checkCombo(2, 4, 6)) {
        console.log("WINNER: " + turn);
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

//     function getResult() {
//         // let draw = $('#box').length
//         const result = h3.innerHTML;
//         if (div.contains("X" || "O")) {
//             h3.innerHTML = "draw";
//         }
//         // } else if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
//         //     console.log("WINNER: X!")
//         // } else if (cells[0] && cells[1] && cells[2] === "O") {
//         //     consolg.log("WINNER: O!")
//         // }
//     };




// HINTS
// if else statements are your friend
// cells[0].textContent
// comparison operators
// ===
// if(conditionOne && conditionTwo || consitionThree);