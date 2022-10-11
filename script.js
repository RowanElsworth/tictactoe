const startBtn = $("#restart-button")

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
    clicked = [];
    turn = "X"
    $(".cell").each(function() {
        $(this).text("") 
    });
    $("#debug").text(clicked);
    $("#status").text("In play");
}

// on button click, add the turn into the cell
if (gameRunning == true) {
    $(document).ready(function() {
        $(".cell").each(function() {
            $(this).click(function() {
                let index = $(this).attr("index");
                // checks if already clicked
                if (clicked.includes(index)) {
                    // re run the turn
                // if not already clicked
                } else {
                    $(this).text(turn);
                    console.log($(this).attr("index"));
                    // put that cell into the checked list
                    clicked.push(index);
                    $("#debug").text(clicked);
                    checkWinner()
                    changeTurn();
                }
            })
        }) 
    });
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
}
// win conditions; gameRunning = false
// draw conditions
// display win / draw
// restart game; initialise