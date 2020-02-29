let cells = document.querySelectorAll('.row > div'); // select all the cells


// listen for click
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}


let turn = "X"

function cellClicked() {
    if (event.target.textContent !== "") {
        return;
    } 

    event.target.textContent = turn;
    togglePlayer();
};

function togglePlayer() {
    if (turn === "O") {
        turn = "X"
    } else {
        turn = "O"
    }
}

// check for winners based on combinations
// function checkCombo(a, b, c) {
//     if (cells[a].textContent === "X" && cells[b].textContent === "X" && cells[c].textContent === "X") {

//     }

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
// if(conditionOne && conditionTwo || consitionThree)