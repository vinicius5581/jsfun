var myClosure = function(a,b,c){
	

	function add(x,y){
		var d = 420;
	
		console.log("add C: "+c);
		console.log("add D: "+d);
	
		return x + y;
	}


	console.log("myClosure C: "+c);
	console.log("myClosure D: "+d);
	console.log("Result: "+add(a,b));
}

myClosure(1,5,10);