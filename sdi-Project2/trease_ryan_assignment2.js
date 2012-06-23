//Ryan Trease
//June 7th 2012
//SDI Project 2
//My Day Fishing

var fishTypes = ["crappie", "bass"];
var locale = ["the farm pond", "the lake"];
var fishLimits = [5, 6];
var time = "6:00 AM";
var rod = "Spinning Reel";
var lure = "Rooster Tail";
var temp = 77;

var output = function (message) {
	 console.log(message);
	};

var getDestination = function (name) {
	var destination = "" + name ;
	return destination;
	}
	var fishingHole = getDestination(locale[0]);

output("I wake up bright and early at " + time + " in order to get up before the fish start biting.");
output("I have decided to fish at " + fishingHole + ".")
output("Oops, Better check the weather first!");
output("The temperature outside is " + temp + "\u00B0.");

if (temp >= 65 && temp <= 85) {
	output("Time to gather the gear and head out!");
	output("I grab the following equipment: " + rod + " and " + lure + " and head to " + fishingHole + ".");
	output("Once at " + fishingHole + "," + " I cast out my line and wait for a fish to bite!");
	
	var catchAFish = function (total) {
		var fishLimit = fishLimits[fishNumber];
		var fishType = fishTypes[fishNumber];
		output("I am trying to catch my limit of " + fishLimit + " " + fishType + " and " + total + " fish total.");
		for (var limits = 1; limits < fishLimit; limits += 1) {
			var fishRemaining = fishLimit - limits;
			output(limits + " caught, " + fishRemaining + " more to catch in order to reach my limit.")
			}
			output("I've caught my limit of " + fishType + ".")
			};
			
		for (var fishNumber = 0; fishNumber < fishTypes.length; fishNumber++) {
		catchAFish(fishLimits [0] + fishLimits[1]);
		}
		output("Time to call it quits and go home for a fish fry!");
		}
else {
	output("Too hot for my blood. Time to go back to bed and try again tomorrow.");
	}