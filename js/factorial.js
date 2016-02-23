/*Factorial*/

/* Factorial Using foor loop */
console.log("Factorial Using foor loop");
var factor = function(number){
	var result = 1;
	var count;
	for (count = number; count > 1; count--){
		result *= count;
	}
	return result;
};
console.log(factor(6));





/* Factorial Using recursive */
console.log("Factorial Using recursive");

var factorial = function(number){
	if (number <= 0){  //terminal case
		return 1;
	} else { // block to execute
		return (number * factorial(number-1));
	}
}

console.log(factorial(6));