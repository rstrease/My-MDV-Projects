//Ryan Trease
//June 12th 2012
//SDI Project 3
//Taking the kids fishing

//alert("JavaScript works!");

var haveMinnows = true;
var storeOpen = true;
var message;
var minnows = 36;
var getUp;
var kids = ["Avery", "Bond"];
var awake;
var sleepy;

var wakeUpKids = function (getUp) {
	console.log("Time to wake " + kids[0] + " and " + kids [1] + " to go fishing!");
	var upAndAtEm; 
	if (upAndAtEm = true) {
		var getUp = "They are up! Let's grab our gear and have some fun!";
		awake = getUp;
		return awake;
	}
	else {
		var getUp = "Since you all don't want to get up we will stay home!";
		sleepy = getUp;
		return sleepy;
	}
}
console.log(wakeUpKids(getUp));

if (getUp = awake) {
	var gear = {
		"kids": [
		{
			name: kids[0],
			pole: "Barbie",
			tackle: ["bobber", " lead weight", " and hook"]
		},
		{
			name: kids[1],
			pole: "Lightning McQueen",
			tackle: ["bobber", " lead weight", " and hook"]
		}
		]
};
for (var key in gear.kids) {
var kid = gear.kids[key];
console.log(kid.name + " is bringing a " + kid.pole + " pole and the following tackle: " + kid.tackle + ".");
};
}

var buyMinnows = function (message) {
	if (haveMinnows && storeOpen) {
		console.log("Thankfully the bait shop is open and they have minnows for the fishing trip. We buy " + minnows + " minnows for the kids to use and head to the farm pond.");
	}
	else if (haveMinnows === false && storeOpen === true) {
		console.log("The bait shop is open but they are unfortunately out of minnows. The fishing trip is over before it starts.");
	}
	else {
		console.log("The bait shop is closed. The fishing trip is over before it starts.");
	}
}
buyMinnows(message);

//JSON data
if (haveMinnows && storeOpen){
console.log("Once we get to the farm pond we see others waiting to fish with us.");
var handleData = function (json) {
	for (var i = 0; i < json.others.length; i++){
		var fishermen = json.others[i];
		console.log(fishermen.name + " is here and brought a " + fishermen.pole + " pole and the following tackle: " + fishermen.tackle + ".");
	};
};
handleData(json);


var minnowCount = function (number) {
	console.log("We have a total of " + minnows + " minnows to split between 6 people.");
	while (number > 0) {
		console.log("We bait all of our hooks and have " + number + " minnows left.");
		number -= 6; }
		return; };
		minnowCount(30);
		console.log("We are out of minnows but we have had a great day.");
		
var fishCount = function (fish) {
	console.log("In summary, we had a total of " + minnows + " minnows to split between 6 people.");
	while (fish < 42) {
		console.log("With each minnow each of us surprisingly caught a fish. After taking the fish off our hooks we had a total of " + fish + " fish.");
		fish += 6; }
		return; };
		fishCount(6);
		console.log("After a long but productive day of fishing it is time to call it quits and go home.");
}		