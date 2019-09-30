var plusMinusTest1 = [-4, 3, -9, 0, 4, 1];
var plusMinusTest2 = [1, 2, 3, -1, -2, -3, 0, 0];

// Counter
function increment() {
    var ans = getCurrentAnswer();
    if (isNaN(ans)) {
        document.getElementsByTagName("h4")[0].innerHTML = 0;
    } else {
        document.getElementsByTagName("h4")[0].innerHTML = Number(ans)+1;
    }
}

/* Pick a random colour from this list and change the background
   myArray[Math.floor(Math.random() * myArray.length)];
   Bonus: When colour is black, make all text white. When No longer black, make all text black */ 
function changeColor() {
    var colours = ["#3498db", "#e74c3c", "#f39c12", "#9b59b6", "black", "white"];
    document.body.style.backgroundColor = colours[Math.floor(Math.random()*colours.length)];
}

function checkPlusMinus1(answer) {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] != plusMinusAns1[i]) {
            document.getElementsByTagName("h4")[0].innerHTML = "Wrong!";
        }
    }
    document.getElementsByTagName("h4")[0].innerHTML = "Correct!";
}

function checkPlusMinus2(answer) {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] != plusMinusAns2[i]) {
            document.getElementsByTagName("h4")[0].innerHTML = "Wrong!";
        }
    }
    document.getElementsByTagName("h4")[0].innerHTML = "Correct!";
}

function plusMinus(plusMinusTest1) {
    var plusCount = 0;
    var negCount = 0;
    var zeroCount = 0;
    for (var i = 0; i < plusMinusTest1.length; i++) {
        if (plusMinusTest1[1] < 0) {
            negCount++;
        }
        else if (plusMinusTest1[1] > 0) {
            plusCount++;
        }
        else {
            zeroCount++;
        }
    }
    return [plusCount/plusMinusTest1.length, negCount/plusMinusTest1.length, zeroCount/plusMinusTest1.length];
}

function plusMinus1(plusMinusTest1) {
    checkPlusMinus1(plusMinus(plusMinusTest1));
}

function plusMinus2(plusMinusTest2) {
    checkPlusMinus1(plusMinus(plusMinusTest2));
}

function getTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') { 
        if (minute===0 && second===0) { 
            hour = 12;
            prepand=' Noon';
        } else { 
            hour=12;
            prepand=' PM';
        } 
    } 
    if (hour===0 && prepand===' AM ') { 
        if (minute===0 && second===0) { 
            hour = 12;
            prepand = ' Midnight';
        } else { 
            hour = 12;
            prepand = ' AM';
        } 
    }
    document.getElementsByTagName("h4")[0].innerHTML = "Today is : " + daylist[day] + ".";
    document.getElementsByTagName("h4")[0].innerHTML += "<br>Current Time : "+hour + prepand + " : " + minute + " : " + second
}

function reverseNumber() {
    var number = prompt("Please enter a valid number", "0");
    number = number.split("").reverse().join("");
    document.getElementsByTagName("h4")[0].innerHTML = number;
}

function getCurrentAnswer() {
    return document.getElementsByTagName("h4")[0].innerHTML;
}

var plusMinusAns1 = [0.500000, 0.333333, 0.166667];
var plusMinusAns2 = [0.375000, 0.375000, 0.250000];