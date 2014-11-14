//Fernando P. López
//November 13, 2014
//Assignment: Conditionals_Industry

//What width and height do buttons have to be in px to fit on an iPhone

var iPhoneWidth = 640;
var iPhoneHeight = 1136;
var iPadWidth = 2048;
var iPadHeight = 1536;
var device = prompt("Are you using an iPad or an iPhone?")
var butttonsAcross = prompt("How many buttons do you want across the screen");
var buttonsTopBottom = prompt("How many buttons do you want top to bottom?");

if(device === "iPhone"){
	console.log("Your buttons will have to be " + iPhoneWidth/butttonsAcross + "px wide and " + iPhoneHeight/buttonsTopBottom + "px high.");
}else if (device === "iPad") {
	console.log("Your buttons will have to be " + iPadWidth/butttonsAcross + "px wide and " + iPadHeight/buttonsTopBottom + "px high.");
}else {
	console.log("Opps! Something went wrong. Please try again.");
}