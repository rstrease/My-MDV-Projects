var fishTypes = ["crappie", "bass"];
var fishLimits = [5, 6];
var time = "6:00 AM";
var rod = "Spinning Reel";
var lure = "Rooster Tail";

var output = function (message) {
	 console.log(message);
};

var getDestination = function (locale) {
	var destination = "" + locale ;
	return destination;
}
var fishingHole = getDestination("the lake");
(fishingHole);

output("I wake up bright and early at " + time + " in order to get up before the fish start biting.");
output("I have decided to fish at " + fishingHole + ".")
output("Oops, Better check the weather first!");

var getFishingWeather = function (unit) {
	var temp = 75;
	var weather;
		if (temp >= 65 && temp <= 85) {
		weather = "clear";
		}
		else if (temp < 65) {
			weather = "too cold";
		}
		else {
			weather = "too hot";
		}
var fishingWeather = "The weather is " + weather + " with a temperature of " + temp + "\u00B0 " + unit + ".";
return fishingWeather;
}
var weatherReport = getFishingWeather("fahrenheit");
output(weatherReport);

if (weather = "clear") {
	output("Time to gather the gear and head out!");
	output("I grab the following equipment: " + rod + " and " + lure + " and head to " + fishingHole + ".");
	output("Once at " + fishingHole + "," + " I cast out my line and wait for a fish to bite!");

	
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
}
else {
	output("Time to go back to bec and try again tomorrow.");
}