//alert("JavaScript works!");

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

console.log(smallestValue(newArray, num));


//Find the total value of just the numbers in an array, even if some of the items are not numbers.

var totalValue = function (array) {
	var sum = 0;
	for (i = 0; i < array.length; i++) {
		if (!isNaN(array[i])) {
			sum += array[i];			
		};
	};
	return sum;
};

var a = new Array();
a = [5,"a", 8, 10, "hello", 20];

console.log(totalValue(a));