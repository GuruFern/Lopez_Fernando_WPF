//Fernando P. López
//November 13, 2014
//Assignment: Conditionals_Industry

//What width and height do buttons have to be in px to fit on an iPhone

var deviceWidth = 640;
var deviceHeight = 1136;
var butttonsAcross = prompt("How many buttons do you want across the screen on the iPhone?");
var buttonsTopBottom = prompt("How many buttons do you want top to bottom?");

if(butttonsAcross && buttonsTopBottom != 0){
	console.log("Oops! You missed an input! Please enter a value.");
}else{
	console.log("Your buttons will have to be " + deviceWidth/butttonsAcross + "px wide and " + deviceHeight/buttonsTopBottom + "px high.");
};