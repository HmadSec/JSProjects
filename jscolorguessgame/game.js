"use strict";
var numSquares = 6;
var colors = [];
var pickedColor;
var stealthColor = "#232323";
var h1Color = "#2C8E99";

//reference elements
var squares = document.querySelectorAll(".square");
var headerRgbColor = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var easyModeButton = document.querySelector(".mode");

resetButton.addEventListener('click', function() {
    reset();
})

init();

function init() {
    setupSquares();
    setupMode();
    reset();
}

function setupSquares() {
    for( let i = 0; i < squares.length; i++){
        console.log(i);
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.backgroundColor;
            console.log("Clicked Square[" + i + "] Color: " + clickedColor);
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
                //change all squares color to picked color
                console.log("-------------setupSquares()----------");
                console.log(`squares[${i}] = ${squares[i]}`);
                changeAllSquaresColor(pickedColor);

            } else {
                this.style.backgroundColor = stealthColor;
                messageDisplay.textContent = "try again";
            }
        });
    }
}

function setupMode() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            for(var i = 0; i < modeButtons.length; i++){
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset() {
    //Update the UI: including the array of colors used, number of squares visible, header, h1, 
    // reset button text, message display.
    colors = genRandomColors(numSquares);
    logPrintColors();
    pickedColor = chooseColor();
    console.log("inside reset(): pickedColor = " + pickedColor);

    headerRgbColor.textContent = pickedColor;
    h1.style.backgroundColor = h1Color;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    //distribute the colors  on the squares and hide the squares depending on the mode
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}

function genRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(makeRandomColor());
    }
    console.log(arr);
    return arr;
}

function makeRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function logPrintColors() {
    for(let i = 0; i < numSquares; i++) {
        console.log("------------------------------");
        console.log("Color[" + i + "] = " + colors[i]);
    }
}

function changeAllSquaresColor() {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}