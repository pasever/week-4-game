$("#startingButton").on("click", function () {

    $("#startingButton").hide();
    generate();

});

//variables to keep the score of wins and losses
var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var seconds;
var int; //The interval to clear
var crystalBool = false;

function generate() {
    seconds = 25;

    //generates random number
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    //display random number 
    $("#randomNumber").text(randomNumber);

    //generate 4 numbers from 1 to 12 for each crystal
    number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
    number3 = Math.floor(Math.random() * 11 + 1);
    number4 = Math.floor(Math.random() * 11 + 1);
    var countdown = document.getElementById('countdown');

    int = setInterval(function () { //Starts the interval
        seconds--;
        countdown.innerHTML = seconds;
        if (seconds === 0) {
            clearInterval(int); //Stops the interval
            setTimeout(lost, 25);
        }
    }, 1000);

    //updates the wins/losses/total box
    $("#totalWins").text(totalWins);
    $("#totalLosses").text(totalLosses);
    // $("#totalScore").text(totalScore);

}

// on click on each crystal recalulates the total score 
$("#firstCrystal").on("click", function () {
    totalScore = totalScore + number1;
    console.log(totalScore);
    $("#finalScore").text(totalScore);

    var randomNumberElement = $("#randomNumber")
    var randomNumber = randomNumberElement.text()
    clearTimeout(timer)
    timer = setTimeout(function () {
        // if wins runs won()
        if (totalScore == randomNumber) {
            won();
            //if losses runs lost() 
        } else if (totalScore > randomNumber) {
            lost();
        }
    }, 400)
})

$("#secondCrystal").on("click", function () {
    totalScore = totalScore + number2;
    $("#finalScore").text(totalScore);

    var randomNumberElement = $("#randomNumber")
    var randomNumber = randomNumberElement.text()
    clearTimeout(timer)
    timer = setTimeout(function () {
        // if wins runs won()
        if (totalScore == randomNumber) {
            won();
            //if losses runs lost() 
        } else if (totalScore > randomNumber) {
            lost();
        }
    }, 400)
})

$("#thirdCrystal").on("click", function () {
    totalScore = totalScore + number3;
    $("#finalScore").text(totalScore);

    var randomNumberElement = $("#randomNumber")
    var randomNumber = randomNumberElement.text()

    clearTimeout(timer)
    timer = setTimeout(function () {
        // if wins runs won()
        if (totalScore == randomNumber) {
            won();
            //if losses runs lost() 
        } else if (totalScore > randomNumber) {
            lost();
        }
    }, 400)

})

$("#fourthCrystal").on("click", function () {
    totalScore = totalScore + number4;
    $("#finalScore").text(totalScore);

    var randomNumberElement = $("#randomNumber")
    var randomNumber = randomNumberElement.text()
    clearTimeout(timer)
    timer = setTimeout(function () {
        // if wins runs won()
        if (totalScore == randomNumber) {
            won();
            //if losses runs lost() 
        } else if (totalScore > randomNumber) {
            lost();
        }
    }, 400)

})

var timer = null;
function won() {

    clearInterval(int); //Stops the timer
    alert("Congratulations! You won!")
    totalWins++;
    $("#totalWins").text(totalWins);
    reset();
}

function lost() {
    clearInterval(int); //Stops the timer
    alert("You lose!");
    totalLosses++;
    $("#totalLosses").text(totalLosses);
    reset();
}

function reset() {
    //start button appears again 
    $("#startingButton").show();
    totalScore = 0;
    $("#finalScore").html(totalScore);
    seconds = 25;
    $("#countdown").html(seconds);
    $("#randomNumber").html(0);
}

