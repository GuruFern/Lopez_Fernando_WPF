//Fernando P. López
//November 20, 2014
//Assignment: Functions_Wacky

//Does the user have enough brick to build a wall of specified width and height
//Ask for Wall Width
//Ask for Wall Height 
//Number of Bricks

var wallWidth = prompt("How wide do you want to make your wall in feet?"); //Prompt for desired wall width
var wallHeight = prompt("How tall do you want to make your wall in feet?"); //Prompt for desired wall height
var brickWidth = prompt("What width in feet does the brick you are building with have?"); //Prompt for brick width
var brickHeight = prompt("What height in feet does the brick you are building with have?"); //Prompt for brick height
var brickAmount = prompt("How many bricks do you have?")

var brickWallCalculator = function(wallWidth, wallHeight, brickWidth, brickHeight) { //Function dividing wall area by brick area
	var numberBricksNeeded = (wallWidth * wallHeight) / (brickWidth * brickHeight);
	return numberBricksNeeded;
};

var numberOfBricks = brickWallCalculator(wallWidth, wallHeight, brickWidth, brickHeight); //Calling Function

if (brickAmount >= numberOfBricks) { //If brick amount is larger than the number brick needed make true
	console.log("You are ready to go! Start building that wall."); //Print to console if true
}else{
	console.log("You do not have enough bricks! You need " + (numberOfBricks - brickAmount) + " more bricks."); //Print to console if false.
};
