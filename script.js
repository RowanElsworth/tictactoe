const buttonOne = document.getElementsByClassName('div-button')
const cells = document.querySelectorAll(".cell")
const startBtn = $("#start-button")

let clicked = [];
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

$(document).ready(function() {
    $("#start-button").click(function() {
        clicked = [];
        $(".cell").each(function(index) {
            $(this).text("") 
        });
        $("#debug").text(clicked);
    });
});