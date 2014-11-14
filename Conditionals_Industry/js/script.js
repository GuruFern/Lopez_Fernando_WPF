//Fernando P. López
//November 13, 2014
//Assignment: Conditionals_Industry

//What width and height do buttons have to be in px to fit on an iPhone or an iPad screen

var iPhoneWidth = 640; //iPhone Width
var iPhoneHeight = 1136;//iPhone Height
var iPadWidth = 2048;//iPad Width
var iPadHeight = 1536;//iPad Height
var device = prompt("Are you using an iPad or an iPhone?") //Prompt user what device will we us to calculate
var butttonsAcross = prompt("How many buttons do you want across the screen"); //Prompt user for how many buttons acrosss
var buttonsTopBottom = prompt("How many buttons do you want top to bottom?"); //Prompt user for hom many buttons top to bottom

if(device === "") { //Validate if device is empty
	var device = prompt("Hey! You forgot to enter your device. iPhone or iPad?"); //Prompt again and assign to device variable
}

if(butttonsAcross === "") { //Validate if buttonAcross is empty
	var butttonsAcross = prompt("Hey! You forgot to enter how many buttons do you want accross on the screen."); //Prompt again and assign to buttonAcross variable
}

if(buttonsTopBottom === "") { //Validate if buttonsTopBottom is empty
	var buttonsTopBottom = prompt("Hey! You forgot to enter how many buttons from top to bottom you want."); //Prompt again and assign to buttonsTopBottom variable
}

if(device === "iPhone"){ //If device variable is iPhone then return True
	console.log("Your buttons will have to be " + iPhoneWidth/butttonsAcross + "px wide and " + iPhoneHeight/buttonsTopBottom + "px high."); //Print calculation for iPHone
}else if (device === "iPad") { //If device variable is iPad then return True
	console.log("Your buttons will have to be " + iPadWidth/butttonsAcross + "px wide and " + iPadHeight/buttonsTopBottom + "px high."); //Print calculation for iPad
}else { //Otherwise
	console.log("Opps! Something went wrong. Please try again."); //Print if user entered something other than iPHone or iPad in device variable
}