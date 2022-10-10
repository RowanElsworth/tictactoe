const buttonOne = document.getElementsByClassName('div-button')
const cells = document.querySelectorAll(".cell")
const startBtn = document.getElementById("start-button")

// startBtn.addEventListener("click", start)

let clicked = []

// for each cell click, change text in cell
$(document).ready(function() {
    $(".cell").each(function(index) {
        $(this).click(function() {
            $(this).text("O");
            console.log($(this).attr("index"));
            clicked.push($(this).attr("index"));
            $("#debug").text(clicked);
        })
    }) 
});

// if clicked don't click again !



