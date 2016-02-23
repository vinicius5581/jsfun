/* Countdown */

/* Countdown Using while loop */
console.log("Countdown Using while loop");
var counter = 10;
while (counter > 0){
	console.log(counter--);
}

/* Countdown Using recursive */
console.log("Countdown Using recursive");
var countdown = function(value){
	if (value > 0){
		console.log(value);
		console.log('return countdown(' + value + ' - 1)')
		console.log('---------');
		return countdown(value - 1);
	} else {
		return value;
	}
};

countdown(10);


// countdown:1  -> value: 10 return: countdown(9)
// countdown:2  -> value: 9  return: countdown(8)
// countdown:3  -> value: 8  return: countdown(8)
// countdown:4  -> value: 7  return: countdown(8)
// countdown:5  -> value: 6  return: countdown(8)
// countdown:6  -> value: 5  return: countdown(8)
// countdown:7  -> value: 4  return: countdown(8)
// countdown:8  -> value: 3  return: countdown(8)
// countdown:9  -> value: 2  return: countdown(1)
// countdown:10 -> value: 1  return: countdown(0)
// countdown:11 -> value: 0  return: 0;
