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
    getResult
};

// ATTEMPT 1 RESULTS
function getResult() {
    // let draw = $('#box').length
    const result = h3.innerHTML;
    if (div.contains("X" || "O")) {
        h3.innerHTML = "draw";
    }
    // } else if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
    //     console.log("WINNER: X!")
    // } else if (cells[0] && cells[1] && cells[2] === "O") {
    //     consolg.log("WINNER: O!")
    // }
}

// ATTEMPT 2 RESULTS
// let isEmpty = document.getElementById('div').innerHTML !== "";

// if(isEmpty) {
//     document.getElementById(results).innerHTML = "draw"
// };

// ATTEMPT 3 RESULTS
// for (let x = 0; x < cells.length; x++) {
    // cells[x].lenght !== 0
// }


// HINTS
// if else statements are your friend
// cells[0].textContent
// comparison operators
// ===
// if(conditionOne && conditionTwo || consitionThree)
// location.reload(false);