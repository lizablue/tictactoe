let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
} 

let turn = "X";

function cellClicked() {
    if (turn === "O") {
        event.target.textContent = "O"
        turn = "X"
    } else {
        event.target.textContent = "X"
        turn = "O"
    }
};


// ATTEMPT 1 RESULTS
// if ($ ('#div').html().length !== 0) {
//     console.log("DRAW");
// } else if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
//     console.log("WINNER: X!")
// } else if (cells[0] && cells[1] && cells[2] === "O") {
//     consolg.log("WINNER: O!")
// } 

// ATTEMPT 2 RESULTS
// let isEmpty = document.getElementById('div').innerHTML !== "";

// if(isEmpty) {
//     document.getElementById(results).innerHTML = "draw"
// };


// HINTS
// if else statements are your friend
// cells[0].textContent

// comparison operators
// ===

// if(conditionOne && conditionTwo || consitionThree) 
// location.reload(false)