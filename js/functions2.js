console.log(add(1,2));

function add(num1, num2){
	return num1 + num2;
}

console.log(add(1,2));


// Error - Can't call a function expression before it's declaration.
//console.log(add2(2,2));

var add2 = function(num1, num2){
	return num1 + num2;
}

console.log(add2(2,2));


function sayHi(){
	console.log("Hi");
}

sayHi();

sayHi2 = sayHi;

sayHi2();

console.log(add2.length);