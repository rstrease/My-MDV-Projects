//Ryan Trease
//June 12th 2012
//SDI Project 3
//Taking the kids fishing

//alert("JavaScript works!");

var haveMinnows = false;
var storeOpen = true;
var message;
var minnows = 36;

var buyMinnows = function (message) {
	if (haveMinnows && storeOpen) {var message = "Thankfully the bait shop is open and they have minnows for the fishing trip. We buy " + minnows + " minnows for the kids to use and head to the .",
	theyHaveMinnows = message;
	return theyHaveMinnows;
	}
	else if (haveMinnows === false && storeOpen === true) {
		console.log("The bait shop is open but they are unfortunately out of minnows. The fishing trip is over before it starts.");
	}
	else {
		console.log("The bait shop is closed. The fishing trip is over before it starts.");
	}
}
var GoFishing = buyMinnows(message);
console.log(GoFishing);