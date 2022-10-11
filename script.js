const startBtn = $("#restart-button")

const winConditions = [
    [0, 1 ,2],
    [3, 4 ,5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let gameRunning = false;
var clicked = [];
var turn = "X"


// starts the game on load
initialise()

// restarts on restart button click
$(document).ready(function() {
    $(startBtn).click(function() {
        initialise()
    });
});

// initialise
function initialise() {
    gameRunning = true;
    clicked = ["", "", "", "", "", "", "", "", ""];
    turn = "X"
    $(".cell").each(function() {
        $(this).text("") 
    });
    $("#debug").text(clicked);
    $("#status").text("In play");
}

// on button click, add the turn into the cell
$(document).ready(function() {
    $(".cell").each(function() {
        $(this).click(function() {
            let index = $(this).attr("index");
            // checks if already clicked
            if (clicked.includes(index)) {
                // re run the turn
            // if not already clicked
            } else {
                updateCell(cell)
                $(this).text(turn);
                console.log($(this).attr("index"));
                // put that cell into the checked list in position of the index
                clicked[index] = index;
                $("#debug").text(clicked);
                checkWinner();
            }
        })
    }) 
});

function updateCell(cell) {

}

// changes turn
function changeTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X"
    }
    // changes turn text
    $("#turn").text(`${turn}'s turn`);
}

// checks win conditions
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i > winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = clicked[condition[0]]
        const cellB = clicked[condition[1]]
        const cellC = clicked[condition[2]]

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    // for win
    if (roundWon == true) {
        $("#status").text(`${turn} won`);
        gameRunning = false;
    }
    // draw
    else if (!clicked.includes("")) {
        $("#status").text(`Draw`);
        gameRunning = false;
    }
    // if not finished change turn
    else {
        changeTurn()
    }
}


// display win / draw
// restart game; initialise