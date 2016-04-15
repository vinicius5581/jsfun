var fruits = ["Banana", "Orange", "Apple", "Mango"];

for (var fruit in fruits){
	console.log(fruits[fruit]);
}

for (var i = 0, alength = fruits.length; i < alength; i++){
	console.log(fruits[i]);
}

console.log("fruits : " + fruits);
console.log(fruits);

// toString()

// document.getElementById("toString").innerHTML = fruits.toString();

console.log("toString() :");
console.log(fruits.toString());
console.log(fruits + "");

// join()

// document.getElementById("join").innerHTML = fruits.join(" * ");

console.log("join() :");
console.log(fruits.join("#"));

// pop()

console.log("fruits :");
console.log(fruits);

console.log("pop() :");
console.log(fruits.pop());

console.log("fruits :");
console.log(fruits);

// push()

console.log("push()");
console.log(fruits.push("Kiwi"));

console.log("fruits :");
console.log(fruits);

// shift()

console.log("shift() :");
console.log(fruits.shift());

console.log("fruits :");
console.log(fruits);

// unshift()

console.log("unshift() :");
console.log(fruits.unshift("Lemon"));

console.log("fruits :");
console.log(fruits);

// Changing Elements

console.log("fruits[0] :");
console.log(fruits[0] = "Blackberry");

console.log("fruits :");
console.log(fruits);

console.log("fruits[fruits.length] :");
console.log(fruits[fruits.length] = "Mango");

console.log("fruits :");
console.log(fruits);

// Deleting Elements

console.log("delete fruits[0] :");
console.log(console.log(delete fruits[0]));

console.log("fruits :");
console.log(fruits);

// Cleaning Array

console.log("shift() :");
console.log(fruits.shift());

console.log("fruits :");
console.log(fruits);

// splice()

console.log("splice(2, 0) :");
console.log(fruits.splice(2, 0, "Pinaple", "Strawberry"));

console.log("fruits :");
console.log(fruits);

console.log("splice(2, 2) :");
console.log(fruits.splice(2, 2, "Banana"));

console.log("fruits :");
console.log(fruits);

console.log("splice(3, 1) :");
console.log(fruits.splice(3, 1));

console.log("fruits :");
console.log(fruits);

// sort()

console.log("sort() :");
console.log(fruits.sort());

console.log("fruits :");
console.log(fruits);

// reverse()
console.log("reverse() :");
console.log(fruits.reverse());

console.log("fruits :");
console.log(fruits);

// Numeric Sort

var points = [40, 100, 1, 5, 25, 10];

console.log("points :");
console.log(points);

// Numeric Sort values as strings.

console.log("sort() :");
console.log(points.sort());

// Numeric Sort - compare function - ascending

console.log("points.sort(function(a, b){return a-b}) :");
console.log(points.sort(function(a, b){return a-b}));

console.log("points :");
console.log(points);

var points = [40, 100, 1, 5, 25, 10];

console.log("points :");
console.log(points);

console.log("points.sort(function(a, b){return a>b}) :");
console.log(points.sort(function(a, b){return a>b}));

console.log("points :");
console.log(points);

// Numeric Sort - compare function - descending

console.log("points.sort(function(a, b){return b-a}) :");
console.log(points.sort(function(a, b){return b-a}));

console.log("points :");
console.log(points);


var points = [40, 100, 1, 5, 25, 10];

console.log("points :");
console.log(points);

console.log("points.sort(function(a, b){return b>a})");
console.log(points.sort(function(a, b){return b>a}));

console.log("points :");
console.log(points);

var points = [40, 100, 1, 5, 25, 10];

console.log("points :");
console.log(points);


// Find the highest 
console.log("Find the highest :");
points.sort(function(a, b){return b-a});
console.log("points[0] :");
console.log(points[0]);

var points = [40, 100, 1, 5, 25, 10];

console.log("points :");
console.log(points);


// Find the lowest 
console.log("Find the lowest :");
points.sort(function(a, b){return a-b});
console.log("points[0] :");
console.log(points[0]);

//Joining Arrays

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];


console.log("myGirls.concat(myBoys) :");
console.log(myGirls.concat(myBoys));




var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren2 = arr1.concat(arr2, arr3);  

console.log("var myChildren2 = arr1.concat(arr2, arr3) :");
console.log(myChildren2);


// slice()

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
              
console.log("fruits :");
console.log(fruits);
              
console.log("fruits.slice(1): ");
console.log(fruits.slice(1));

console.log("citrus :");
var citrus = fruits.slice(1);
console.log(citrus);

console.log("fruits :");
console.log(fruits);


console.log("fruits.slice(3): ");
console.log(fruits.slice(3));

console.log("citrus2");
var citrus2 = fruits.slice(3);
console.log(citrus2);

console.log("fruits :");
console.log(fruits);

console.log("fruits.slice(1, 3) : ");
console.log(fruits.slice(1, 3));

console.log("citrus3");
var citrus3 = fruits.slice(1, 3);
console.log(citrus3);

console.log("fruits :");
console.log(fruits);
console.log(fruits.valueOf());
console.log(fruits.toString());

// document.getElementById("demo").innerHTML = fruits.valueOf();

// Constructor

console.log("fruits.constructor :");
console.log(fruits.constructor);




// console.log("");
// console.log();