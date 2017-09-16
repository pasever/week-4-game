$("#startingButton").on("click", function() {
	
	// $("#startingButton").remove();
	generate();

});

function generate() {
	//generates random number
	var randomNumber = Math.floor(Math.random()*101+19);
	//display random number 
	$("#randomNumber").text(randomNumber);

	//generate 4 numbers from 1 to 12 for each crystal
	var number1 = Math.floor(Math.random()*11+1);
	var number2 = Math.floor(Math.random()*11+1);
	var number3 = Math.floor(Math.random()*11+1);
	var number4 = Math.floor(Math.random()*11+1);

	//variables to keep the score of wins and losses
	var totalScore = 0;
	var totalWins = 0;
	var totalLosses = 0;

	//updates the wins/losses/total box
	$("#totalWins").text(totalWins);
	$("#totalLosses").text(totalLosses);
	// $("#totalScore").text(totalScore);

}

// on click on eacg crystal recalulates the total score 
	$("#firstCrystal").on("click", function() {
		totalScore += number1;
		$("finalScore").text(totalScore);
		// if wins runs won()
		 if (totalScore == randomNumber){
			won();
		//if losses runs lost() 
		} else if (totalScore > randomNumber) {
			lost();
		}
	})

	$("#secondCrystal").on("click", function() {
		totalScore += number2;
		$("finalScore").text(totalScore);

		 if (totalScore == randomNumber){
			won();
		} else if (totalScore > randomNumber) {
			lost();
		}
	})

	$("#thirdCrystal").on("click", function() {
		totalScore += number3;
		$("finalScore").text(totalScore);

		 if (totalScore == randomNumber){
			won();
		} else if (totalScore > randomNumber) {
			lost();
		}

	})	

		$("#fourthCrystal").on("click", function() {
		totalScore += number4;
		$("finalScore").text(totalScore);

		 if (totalScore == randomNumber){
			won();
		} else if (totalScore > randomNumber) {
			lost();
		}
	})


function won() {

	alert("Congratulations! You won!")
	wins++;
	$("#totalWins").text(wins);
	reset();
}

function lost() {

		alert("You lose!");
		losses++;
		$("#totalLosses").text(losses);
}

function reset() {
	//start button appears again 
}

