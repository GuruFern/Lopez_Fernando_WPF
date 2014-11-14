//Fernando P. López
//November 13, 2014
//Assignment: Conditionals_Personal

//Do I need more Hot Pockets?
//Based on how many Hot Pockets there are in the freezer and how many days in the week are left, is there enough to last the rest of the week?

var daysInWeek = 7;
var averageEatenPerWeek = 3; //Average amount of boxes of Hot Pockets eaten per week
var amountLeft = prompt("How many boxes of Hot Pockets are there in the freezer?");//Prompt the user to see how many boxes of Hot Pockets are left
var daysLeft =  prompt("How many days are left in the week?"); //Prompts the user to enter how many days in the week are left

if(amountLeft === "") { //Validate if device is empty
	var amountLeft = prompt("Hey! You forgot to enter how many boxes of Hot Pockets are left."); //Prompt again and assign to amountLeft variable
}

if(daysLeft === "") { //Validate if buttonAcross is empty
	var daysLeft = prompt("Hey! You forgot to enter how many days are left in the week."); //Prompt again and assign to daysLeft variable
}

if(daysLeft/daysInWeek * averageEatenPerWeek <= amountLeft){//Conditional devides days left in the week by the amount of days in the week and then multiplies by the average eaten per week and that has to be less than or equal to the amount left
	console.log("Don't you worry. Sit on the couch and east some Hot Pockets!");//Print if conditional is true and there is enough Hot Pocket boxes
}else{//If conditional false
	console.log("Hey! Hurry to the store to replenish the supply!");//Print if conditional false that you better go get some at the store
}