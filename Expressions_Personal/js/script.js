//Fernando P. López
//November 06, 2014
//Assignment: Expressions

//Calculation Cost of Laundry in a Year

var howOftenLaundry = prompt("How often a week do you do laundry?"); //How often
var amountOfLoads = prompt("How many average loads do you do?"); //Number of Loads
var costOfLoad = prompt("What is the total cost of a load? (Include cost of Washer and Dryer)"); //Cost of Loads

var totalCostOfLaundy = howOftenLaundry * amountOfLoads * costOfLoad * 52; //Weekly Costy Multiplied by 52 weeks in an year
console.log("You spend a total of $" + totalCostOfLaundy + " a year on Laundry!"); //Print to console