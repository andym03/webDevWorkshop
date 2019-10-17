var plusMinusTest1 = [-4, 3, -9, 0, 4, 1];
var plusMinusTest2 = [1, 2, 3, -1, -2, -3, 0, 0];

// Counter
// Retrieve the current text in the answer field. If it is a number, increase it by 1. Else set it to 0.
// Hint: Use the function isNaN (is Not a Number)
function increment() {
    var curr = getCurrentAnswer();
    if (isNaN(curr)) {
        // Not a number logic
    } else {
        // Increment
    }

    setAnswer(curr);
}

// Change Colour
/* Pick a random colour from the list and change the background
   Hint: 
   colours[Math.floor(Math.random()*colours.length)] picks a random item from the list
   Set the background with document.body.style.backgroundColor
*/
// Bonus: When colour is black, make all text white. When No longer black, make all text black */ 
function changeColor() {
    var colours = ["#3498db", "#e74c3c", "#f39c12", "#9b59b6", "black", "white"];
}

// Plus Minus
/*
    Given an array of positive, negative, and zero values, return an array containing 
    the percentage of positive, negative, and zero values as sepeate entries,
    such that:
        answer[0] is the percentage of positive values
        answer[1] is the percentage of negative values 
        answer[2] is the percentage of zero values

    For example, data will be an array that looks like: [-4, 3, -9, 0, 4, 1]
    It has 3 positive values, 2 negative values and a single 0. It also has a length of 6. 

    data.length will return the length of the array.


*/
function plusMinus(data) {
    var answer = [];
    for (var i = 0; i < data.length; i++) {
        
    }

    return answer
}

// GetTime
/*
    Write the current day and time in the answer field, in the format:
    'Today is : Wednesday.' 
    'Current Time : 2 PM : 57 : 38' (Hours, Minutes, Seconds)

    Research / Make an estimated guess on how to use the Date object to get the data you need.
    You will need to convert 24 hour time to 12 hour time.
*/
function getTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

    //document.getElementsByTagName("h4")[0].innerHTML = answer;
}

// reverseNumber
/*
    Reverse the given number.
    i.e, 123 becomes 321. 
    i.e, 6006 becomes 6006

    Write the answer to the answer field
*/
function reverseNumber() {
    var number = prompt("Please enter a valid number", "0");
}

/*
    Helper functions below, do not edit
*/
function getCurrentAnswer() {
    return document.getElementsByTagName("h4")[0].innerHTML;
}

function setAnswer(data) {
    document.getElementsByTagName("h4")[0].innerHTML = data;
}

/*
    The function called by the first plus minus button. Do not modify
*/
function plusMinus1() {
    checkPlusMinus(plusMinus(plusMinusTest1), plusMinusAns1);
}

/*
    The function called by the second plus minus button. Do not modify
*/
function plusMinus2() {
    checkPlusMinus(plusMinus(plusMinusTest2), plusMinusAns2);
}

/*
    The checker function for both plus minus functions. Takes in the user result and the given answer
    set for either plusMinus1 or plusMinus2. Answers are at the bottom of the page, input at the top.
    Do not modify.
*/
function checkPlusMinus(result, answer) {
    if (result == undefined) {
        document.getElementsByTagName("h4")[0].innerHTML = "Wrong!";
    }
    for (var i = 0; i < result.length; i++) {
        if (result[i] != answer[i]) {
            document.getElementsByTagName("h4")[0].innerHTML = "Wrong!";
        }
    }
    document.getElementsByTagName("h4")[0].innerHTML = "Correct!";
}

var plusMinusAns1 = [0.500000, 0.333333, 0.166667];
var plusMinusAns2 = [0.375000, 0.375000, 0.250000];