// FUNCTION LITERAL

	// Create a variable called add and store a function
	// in it that adds two numbers

var add = function (a, b){
	return a + b;
};

//INVOCATION

// THE METHOD INVOCATION PATTERN

	// Create myObject. It has a value and an increment
	// method. The increment method takes an optional
	// parameter. If the argument is not a number, then 1
	// is used as the default.

var myObject = {
	value: 0,
	increment: function (inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value); //1

myObject.increment(2);
document.writeln(myObject.value); //3

// THE FUNCTION INVOCATION PATTERN

var sum = add(3, 4); // sum is 7

	// Augment myObject with a double method

myObject.double = function () {
	var that = this; //Workaround

	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper();  // Invoke helper as a function
};

// Invoke double as a method.

myObject.double();
document.writeln(myObject.value);

// THE CONSTRUCTOR INVOCATION PATTERN

	// Create a constructor function called Quo.
	// It makes an object with a status property.

var Quo = function (string) {
	this.status = string;
}

	// Give all instances of Quo a public method

	// called get_status.

Quo.prototype.get_status = function () {
	return this.status;
};

	// Make an instance of Quo.

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status()); //confused


// THE APPLY INVOCATION PATTERN

	// Make an array of 2 number and add them.

var array = [3, 4];
var sum = add.apply(null, array); // sum is 7

	// Make an object with a status member.

var statusObject = {
	status:  'A-OK'
};

	// statusObject does not inherit from Quo.prototype,
	// but we can invoke the get_status method on 
	// statusObject even though statusObject does not have
	// a get_staus method.

var status = Quo.prototype.get_status.apply(statusObject);
	// status is 'A-Ok'