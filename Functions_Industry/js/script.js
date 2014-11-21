//Fernando P. López
//November 20, 2014
//Assignment: Functions_Industry

//Convert HEX to RGB
//Ask the user to enter whether they are starting with a HEX or RGB value.
//Ask for value
//Call function required and print result to user.

var objectWidth = prompt ("How wide is the object on the web page in pixels?");
var objectHeight = prompt ("How tall is the object on the web page in pixels?");

function objectArea(objectWidth, objectHeight) {
	var totalArea = objectWidth * objectHeight;
	return totalArea;
};

var area = objectArea(objectWidth, objectHeight);
console.log("The total area of the object is " + area + "px.")