//Fernando P. López
//November 11, 2014
//Assignment: Conditionals Worksheet

//Drive accross the desert
//Will a driver make it across the desert without stopping for gas?
//Use: MPG, % of tank left, and capacity of  tank in gallons

var distance = 200;
var mpg = 25;
var amountLeft = .30;
var capacity = 14;

if (capacity * amountLeft * mpg > distance) {
	//If there is enough gas print: "Yes, you can make it without stopping for gas!"
	console.log("Yes, you can make it without stopping for gas!");
} else {
	//If there is not enought gas print: "You only have X gallons of gas in your tank, better get gas now while you can!”"
	console.log("You only have " + capacity * amountLeft + " gallons of gas in your tank, better get gas now while you can!");
};


//Check the Login
//If the username AND password are correct print: "Welcome, (username)" else give an error message. 
//There should be one error message for Username and a different one for password

var correctUsername = "Fernando";
var correctPassword = "1985";
var enteredUsername = prompt("What is your Username?");
var enteredPassword = prompt("What is your Password?");

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
	console.log("Welcome " + correctUsername + "!");
}else if (enteredPassword === correctPassword) {
	console.log("User not found. Try again.");
}else {
	console.log("Password does not match our records.");
};


//Movie Ticket Price
//Regular Movie Theather Price is $12
//If you are between the ages 55 or older, 10 or less, or are seeing a movie between 3pm and 5pm it only costs $7

