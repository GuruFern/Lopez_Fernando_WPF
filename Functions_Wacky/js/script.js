//Fernando P. López
//November 13, 2014
//Assignment: Conditionals_Wacky

//If there are clouds in the sky then display a 2 sentence saying, otherwise show a 2 sentence saying for no clouds in the sky

var ifClouds = "Clouds form beautiful shapes in the sky. Do you see the purple elephan over there?"; //If there are clouds this will be printed
var ifNoClouds = "Clear, Blue and Beautiful skies. Freedom is real and I can see nothing but the horizon."; //If there are no clouds this will be printed
var clouds = prompt("Is there clouds in the sky? Yes or No?"); //Prompt the user if there are clouds in the sky

if (clouds === "") { //Validate clouds prompt
	var clouds = prompt("Oops! You forgot to describe the sky to me. Are there clouds in the sky? Yes or No?") //Propmpt User for answer again
};

(clouds === "Yes" ) ? console.log(ifClouds) : console.log(ifNoClouds); //Ternary with conditional looking for the string yes; If yes show ifClouds, If no show ifNoClouds