const buttonOne = document.getElementsByClassName('div-button')
const cells = document.querySelectorAll(".cell")
const startBtn = document.getElementById("start-button")

// startBtn.addEventListener("click", start)

let clicked = []
var turn = "X"


// for each cell click, change text in cell
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
                changeTurn();
            }
        })
    }) 
});

function changeTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X"
    }
}

// if clicked don't click again !



