/*Tower of Hanoi*/

var hanoi = function(disc, src, aux, dst){ 
	if (disc > 0){
		hanoi(disc - 1, src, dst, aux); //1-3-2
		console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst); //0-1-3
		hanoi(disc - 1, aux, src, dst); //2-1-3
	}
}

hanoi(3, 'Source', 'Auxiliar', 'Destination');


// Control Flow for 3 Discs
//
// hanoi(3, 'Source', 'Auxiliar', 'Destination'){
// hanoi(2, 'Source', 'Destination', 'Auxiliar'){
// 	hanoi(1, 'Source', 'Auxiliar', 'Destination'){
// 		hanoi(0, 'Source', 'Destination', 'Auxiliar'){}
// 		console.log(1, Source, Destination);  // <- 1
// 		hanoi(0, 'Auxiliar', 'Source', 'Destination'){}
// 	}
// 	console.log(2, Source, Auxiliar);   // <- 2
// 	hanoi(1, 'Destination', 'Source', 'Auxiliar'){
// 		hanoi(0, 'Destination', 'Auxiliar', 'Source'){}
// 		console.log(1, Destination, Auxiliar);   // <- 3
// 		hanoi(0, Source, Destination, Auxiliar){}
// 	}
// }
// console.log(3, Source, Destination);   // <- 4
// hanoi(2, 'Auxiliar', 'Source', 'Destination'){
// 	hanoi(1, 'Auxiliar', 'Destination', 'Source'){
// 		hanoi(0, 'Auxiliar', 'Source', 'Destination'){}
// 		console.log(1, Auxiliar, Source);   // <- 5
// 		hanoi(0, 'Destination', 'Auxiliar', 'Source'){}
// 	}
// 	console.log(2, Auxiliar, Destination);   // <- 6
// 	hanoi(1, 'Source', 'Auxiliar', 'Destination'){
// 		hanoi(0, 'Source', 'Destination', 'Auxiliar'){}
// 		console.log(1, Source, Destination);   // <- 7
// 		hanoi(0, 'Auxiliar', 'Source', 'Destination'){}
// 	}
// }
	

