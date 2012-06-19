//alert("JavaScript works!");

//Find the smallest value in an array that is greater than a given number

var smallestValue = function (array, num) {
	var smallest = array[2];
	for (i = 0; i < array.length; i++) {
		if (array[i] < smallest && array[i] > num) {
			smallest = array[i];
			return smallest;
		}
	}
	
};

var newArray = [10, 36, 48, -5, 7, 40];
var num = 39;

console.log(smallestValue(newArray, num));