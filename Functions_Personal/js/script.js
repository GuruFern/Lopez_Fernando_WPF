//Fernando P. López
//November 20, 2014
//Assignment: Functions_Personal

//How much water do I need a day based on my weight and level of daily excercise
//Ask user for weight
//Ask user for amount of daily excercise
//Call function that has calculation

prompt("We will now calculate how much water you need per day in ounces.")
var weight = prompt("What is your current weight in pounds?");
var excercise = prompt("How much excercise do you do a day in minutes?");

function waterCalculation (weight, excercise) {
	var waterTotal = (weight * .67) + (excercise * .4);
	return waterTotal;
};

var total = waterCalculation(weight, excercise);
console.log("You should drink a total of " + total + "oz of water per day.");
