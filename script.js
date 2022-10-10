const startBtn = $("#restart-button")

let gameRunning = true;

var clicked = [];
var turn = "X"

// for each cell click, change text in cell
if (gameRunning == true) {
    $(document).ready(function() {
        $(".cell").each(function() {
            $(this).click(function() {
                let index = $(this).attr("index");
                if (clicked.includes(index)) {
                    // re run the turn
                } else {
                    $(this).text(turn);
                    console.log($(this).attr("index"));
                    clicked.push(index);
                    $("#debug").text(clicked);
                    ChangeTurn();
                }
            })
        }) 
    });
}

// restarts the game
$(document).ready(function() {
    Initialise()
});
// restarts on restart button click
$(document).ready(function() {
    $(startBtn).click(function() {
        Initialise()
    });
});


// initialise
function Initialise() {
    var clicked = [];
    var turn = "X"
    $(".cell").each(function() {
        $(this).text("") 
    });
    $("#debug").text(clicked);
    $("#end").text("In play");
}

// on button click, add the turn into the cell
// put that cell into the checked list

// changes turn
function ChangeTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X"
    }
    // changes turn text
    $("#turn").text(`${turn}'s turn`);
}

// win conditions; gameRunning = false
// draw conditions
// display win / draw
// restart game; initialise