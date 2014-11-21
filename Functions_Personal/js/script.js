//Fernando P. López
//November 20, 2014
//Assignment: Functions_Personal

//How much water do I need a day based on my weight and level of daily excercise
//Ask user for weight
//Ask user for amount of daily excercise
//Call function that has calculation

var weight = prompt("What is your current weight in pounds?");
var excercise = prompt("How much excercise do you do a day in minutes?");

if(weight === "") { //Validate if device is empty
	var weight = prompt("Awww, don't be shy. What is your current weight in pounds?"); //Prompt again and assign to amountLeft variable
}

if(excercise === "") { //Validate if buttonAcross is empty
	var excercise = prompt("Don't be bashful. How often do you flex them muscles?"); //Prompt again and assign to daysLeft variable
}

function waterCalculation (weight, excercise) {
	var waterTotal = (weight * .67) + (excercise * .4);
	return waterTotal;
};

var total = waterCalculation(weight, excercise);
console.log("You should drink a total of " + total + "oz of water per day.");
