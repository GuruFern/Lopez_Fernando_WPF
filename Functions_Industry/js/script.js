//Fernando P. López
//November 20, 2014
//Assignment: Functions_Industry

//Determine area of an object in pixels

var objectWidth = prompt ("How wide is the object on the web page in pixels?"); //Prompt Width
var objectHeight = prompt ("How tall is the object on the web page in pixels?"); //Prompt Height

function objectArea(objectWidth, objectHeight) { //Function that will calculate area
	var totalArea = objectWidth * objectHeight;
	return totalArea;
};

var area = objectArea(objectWidth, objectHeight); // Callint the function
console.log("The total area of the object is " + area + "px.") //Priting result to the console.