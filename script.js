const buttonOne = document.getElementsByClassName('div-button')
const cells = document.querySelectorAll(".cell")
const startBtn = $("#start-button")

let clicked = [];
var turn = "X"
let gameRunning = true;

// for each cell click, change text in cell
if (gameRunning == true) {
    $(document).ready(function() {
        $(".cell").each(function(index) {
            $(this).click(function() {
                let x = $(this).attr("index");
                if (clicked.includes(x)) {
                    // re run the turn
                } else {
                    $(this).text(turn);
                    console.log($(this).attr("index"));
                    clicked.push($(this).attr("index"));
                    $("#debug").text(clicked);
                    ChangeTurn();
                }
                if (clicked.length == 9) {
                    $("#end").text("Draw")
                }
            })
        }) 
    });
}

// draw check
if (clicked.length == 9) {
    $("#end").text("Draw");
}

// changes the turn
function ChangeTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X"
    }
    $("#turn").text(`${turn}'s turn`);
}

// restarts the game
$(document).ready(function() {
    $("#start-button").click(function() {
        clicked = [];
        $(".cell").each(function(index) {
            $(this).text("") 
        });
        $("#debug").text(clicked);
        $("#end").text("In play");
    });
});

// initialise
// on button click, add the turn into the cell
// put that cell into the checked list
// win conditions
// draw conditions
// display win / draw
// restart game