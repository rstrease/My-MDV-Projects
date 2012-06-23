//alert("JavaScript works!");

//function 1
//Does a string follow a 123-456-7890 pattern like a phone number?

var validPhone = function (string){
	var phoneNumber = /^\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
	if(string.match(phoneNumber)){
		return "The phone number " + num + " is valid.";
	}
	else{
		return "The phone number " + num + " is not valid.";
	}
}
	
var num = "405582-5423";
console.log(validPhone(num));

//function 2
//Does a string follow an aaa@bbb.ccc pattern like an email address?

var validEmail = function (string) {
	var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (string.match(email)) {
		return "The email address " + mail + " is valid.";
	}
	else {
		return "The email address " + mail + " is not valid.";
	}
}

var mail = "rstrease@gmail.com";
console.log(validEmail(mail));

//function 3
//Is the string a URL? (Does it start with http: or https:?)

	var urlString = function (url) {
		var validUrl = /^(?:http(s)?:\/\/)?(?:\www+\.)+[a-z]{2,6}$/i;
		if (url.match(validUrl)) {
			return "The URL " + url + " is valid.";
		}
		else {
			return "The URL " + url + " is not valid.";
		}
	}
	
console.log(urlString("http://ww.google.com"))

//function 4
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

var formatNum = function (number) {
	var n = number.toFixed(2); 
	return n;
}

var num = 5.7;
console.log("The number " + num + " formatted to two decimal places is $" + formatNum(num) + ".");

//function 5
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

	var stringVersion = function (num){
		var n = parseInt(num);
		return n;
	}
	
var number = "42";
console.log("The string \"" + number + "\" returned as an actual number is " + stringVersion(number) + ".");

//function 6
//Find the smallest value in an array that is greater than a given number

var smallestValue = function (array, num) {
	var smallest = array[2];
	for (i = 0; i < array.length; i++) {
		if (array[i] < smallest && array[i] > num) {
			smallest = array[i];
		}
	}
	return smallest;
};

var newArray = [10, 36, 48, -5, 7, 40];
var num = 39;

console.log("The smallest value in the array that is greater than " + num + " is " + smallestValue(newArray, num) + ".");

//function 7
//Find the total value of just the numbers in an array, even if some of the items are not numbers.

var totalValue = function (array) {
	var sum = 0;
	for (i = 0; i < array.length; i++) {
		if (!isNaN(array[i])) {
			sum += array[i];			
		}
	}
	return sum;
};

var a = new Array();
a = [5, "a", 8, 10, "hello", 20];

console.log("The total value of the numbers in the array is " + totalValue(a) + ".");