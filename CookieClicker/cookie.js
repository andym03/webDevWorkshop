// Score is our currency as well!
var score = 0;

// Inventory Counts. Be sure to increment when you buy things!
var cursorCount = 0;
var factoryCount = 0;

var factoryCost = 10;
var cursorCost = 5;

var achievementCount = 0;
var cookiesPerSecond = 0;

// Feel free to create more achievements by following this pattern.
// Make sure the string name is the name of the function that checks the achievement condition
var achievements = {
    'getTenCookies' : false
}

// The game loop. Functions put here will be called every 10th of a second
// 100 = 100 milliseconds. Feel free to increase or decrease!
const interval = setInterval(function() {
    factoryCheck();
  }, 100);

// A default achievement function. Checks the parameters for an achievement,
// (In this case, getting 10 cookies) and checks if the achievement has been completed
// yet. If not, create the alert and set the achievement to true.
function getTenCookies() {
    if (score >= 10 && achievements['getTenCookies'] == false) {
        achievements['getTenCookies'] = true;
        createAchievementAlert("How the Cookie Crumbles", "Get 10 Cookies!");
    }

}

function theBigClick() {
    score = score + 1 + cursorCount;
    updateScore();
}

function buyMultiplier() {
    if (score >= cursorCost) {
        score -= cursorCost;
        cursorCount += 0.1;

        cursorCost = parseInt(document.getElementById("cursorCost").innerHTML) + 1;
        document.getElementById("cursorCost").innerHTML = cursorCost;

        updateScore();
    }
}

function buyFactory() {
    if (score >= factoryCost) {
        if (factoryCount == 0) {
            factoryCheck();
        }
        score -= factoryCost;
        factoryCount++;
        cookiesPerSecond += 1;
        //incrememnting cost of the factory
        factoryCost = parseInt(document.getElementById("factoryCost").innerHTML) + 10;
        document.getElementById("factoryCost").innerHTML = factoryCost;

        updateScore();
    }
}

function factoryCheck() {
    score = score+cookiesPerSecond;
    updateScore();
}

// Updates the score and will check for achievements
function updateScore() {
    var getScore = document.getElementById("score").innerHTML;
    if (getScore != undefined) {
        document.getElementById("score").innerHTML = score;
    }
    //updates the cookie per click count
    var getClick = document.getElementById("cookiePerClick").innerHTML;
    if (getClick != undefined) {
        document.getElementById("cookiePerClick").innerHTML = cursorCount+1;
    }

    //updates the cookie per second count
    var getRate = document.getElementById("cookiesPerS").innerHTML;
    if (getRate != undefined) {
        document.getElementById("cookiesPerS").innerHTML = cookiesPerSecond;
    }
    checkAchievements();
}

function closeAchievement(e)
{
    e.parentNode.removeChild(e);
}

// Helper function to check if achievements have been completed
function checkAchievements() {
    for (const [key, value] of Object.entries(achievements)) {
        if (value == false) {
            window[key]()
        }
    }
}

// Helper function to create an achievement box.
function createAchievementAlert(achievementTitle, achievementText) {
        // AchievementBox
        var achievementNode = document.createElement("div");

        // TextBox
        var achievementTextBox = document.createElement("div");
        achievementTextBox.style.marginLeft = "auto";
        achievementTextBox.style.marginRight = "auto";

        //AchievementTitle
        var achievementTitleNode = document.createElement("h3");
        achievementTitleNode.innerText = achievementTitle;

        // AchievementText
        var achievementTextNode = document.createElement("p");
        achievementTextNode.innerText = achievementText;

        achievementTextBox.appendChild(achievementTitleNode);
        achievementTextBox.appendChild(achievementTextNode);

        var trophy = document.createElement("img");
        trophy.src = 'trophy.jpeg';

        var exitButton = document.createElement("button");
        var exitCross = document.createTextNode("X");
        exitButton.appendChild(exitCross);
        //exitButton.onclick = "closeAchievement";
        var buttonId = "achievement" + achievementCount;
        exitButton.id = buttonId;
        exitButton.onclick = function() { 
            var element = document.getElementById(buttonId);
            element.parentElement.remove();
        };

        achievementNode.classList.add('achievment');
        achievementNode.classList.add('card');
        achievementNode.style.display = "inline-flex"

        achievementNode.appendChild(trophy);
        achievementNode.appendChild(achievementTextBox);
        achievementNode.appendChild(exitButton);

        var element = document.getElementById("mainId");
        element.appendChild(achievementNode);
}