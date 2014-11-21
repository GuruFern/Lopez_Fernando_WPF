//Fernando P. López
//November 20, 2014
//Assignment: Functions_Wacky

//How many bricks does the user need to build a wall of specified width and height
//Ask for Wall Width
//Ask for Wall Height 
//Ask for Brick Size
//Call Function that will perform calculation

var wallWidth = prompt("How wide do you want to make your wall?");
var wallHeight = prompt("How tall do you want to make your wall");
var brickWidth = prompt("What width does the brick you are building with have?");
var brickHeight = prompt("What height does the brick you are building with have?");

var brickWallCalculator = function(wallWidth, wallHeight, brickWidth, brickHeight) {
	var numberBricks = (wallWidth * wallHeight) / (brickWidth * brickHeight);
	return numberBricks;
};