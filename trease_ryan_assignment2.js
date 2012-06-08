//alert("JavaScript works!");

var fishTypes = ["crappie", "bass"];
var fishLimits = [5, 6];
var location = ["our farm pond", "the lake"];
var time = "6:00 AM";

var output = function (message) {
	 console.log(message);
};

output("The location where I chose to go fishing is at " + location[1] + ".");
output("I wake up bright and early at " + time + " in order to get up before the fish start biting.");
output("Oops, Better check the weather first!");

var getFishingWeather = function (unit) {
	var temp = 98;
	var weather;
	var fishingWeather;
		if (temp >= 65 && temp <= 85) {
		weather = "clear";
		}
		else if (temp < 65) {
			weather = "too cold";
		}
		else {
			weather = "too hot";
		}
fishingWeather = "The weather is " + weather + " with a temperature of " + temp + "\u00B0 " + unit + ".";
return fishingWeather;
}
var weatherReport = getFishingWeather("fahrenheit");
output(weatherReport);

if (getFishingWeather){
	output("Let's go fishing!");
}
else {
	output("Let's go back to bed!");
}

var catchAFish = function () {
	var fishLimit = fishLimits[fishNumber];
	var fishType = fishTypes[fishNumber];
	output("I am trying to catch my limit of " + fishLimit + " " + fishType + ".");
	for (var limits = 1; limits < fishLimit; limits += 1) {
		var fishRemaining = fishLimit - limits;
		output(limits + " caught, " + fishRemaining + " more to reach my limit!")
}
output("I've caught my limit of " + fishType + ".")
};
for (var fishNumber = 0; fishNumber < fishTypes.length; fishNumber++) {
catchAFish();
}