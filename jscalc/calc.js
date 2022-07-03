/* Javascript Calculator */
//Activiate Strict Mode
"use strict";
//Getting reference to the buttons
var input = document.getElementById("input");
var number = document.querySelectorAll(".numbers div");
var operator = document.querySelectorAll(".operators div");
var result = document.getElementById("result");
var clear = document.getElementById("clear");
var resultDisplayed = false;//output displayed flag

//Adding the click handlers to the numbers and operators
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (e) {
        //this is for inserting the numbers into the math expression
        //3 scenarios:
        //1- user didn't click the result button(resultDisplayed = false)->keep inserting/adding the numbers
        //2- user clicked the result button(resultDisplayed = true) AND clicked an operator after so he can manipulate the result in an expression
        //->reset the flag and keep on inserting/adding the numbers
        //3- user clicked the result button(resultDisplayed = true) AND NOT click an operator->reset the flag and clear input and start over/clear input for new expression

        //We need the current string that's inside the input, then extract the last character inserted.
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (
            resultDisplayed === true &&
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "×" ||
            lastChar === "÷"
        ) {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }


    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (e) {
        //3 scenarios: 
        //last inserted character is an operator->replace the last operator with the new one
        //input is empty->do nothing
        //input not empty AND last inserted char is a number->insert the operator

        //We need the current string that's inside the input, then extract the last character inserted.
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "×" ||
            lastChar === "÷") {
                var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
                input.innerHTML = newString;
            } else if(currentString.length == 0) {
                console.log("Input string is empty, insert a number not an operator.");
            } else {
                input.innerHTML += e.target.innerHTML;
            }
    });
}

//Clear button logic
clear.addEventListener('click', () => {
        input.innerHTML = "";
});

//Result button logic
result.addEventListener('click', function () {
    //store the input string
    //extract numbers array
    //extract operators array
    //perform the operations: div -> multi -> substr -> addition:
        //1- in the numbers array, remove the two correspondant numbers and insert the result of the operation
        //2- in the operator array, remove the operator
        //3- check if there is more operators in the operators array.
    //display the result of the operations
    //set flag to true

    var inputString = input.innerHTML;
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    var operators = inputString.replace(/[0-9]|\./g, '').split('');

    console.log("inputString: " + inputString);
    console.log("numbers: " + numbers);
    console.log("operators: " + operators);
    console.log("------------------------");

    var division = operators.indexOf('÷');
    while(division != -1) {
        numbers.splice(division, 2, numbers[division] / numbers[division + 1]);
        operators.splice(division, 1);
        division = operators.indexOf('÷');
    }

    var multiplication = operators.indexOf('×');
    while(multiplication != -1) {
        numbers.splice(multiplication, 2, numbers[multiplication] * numbers[multiplication + 1]);
        operators.splice(multiplication, 1);
        multiplication = operators.indexOf('×');
    }

    var substraction = operators.indexOf('-');
    while(substraction != -1) {
        numbers.splice(substraction, 2, numbers[substraction] - numbers[substraction + 1]);
        operators.splice(substraction, 1);
        substraction = operators.indexOf('-');
    }

    var addition = operators.indexOf('+');
    while(addition != -1) {
        numbers.splice(addition, 2, parseFloat(numbers[addition]) + parseFloat(numbers[addition + 1]));
        operators.splice(addition, 1);
        addition = operators.indexOf('+');
    }

    input.innerHTML = numbers[0];
    resultDisplayed = true;
    
})