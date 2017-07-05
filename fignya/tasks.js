/*function triangleCount (a, b, c) {
	var triangle = 0;
	if (a == b && b == c && c == a) {
		triangle = 'ravnostoronniy';
	} else if (a == b || a == c || b == c) {
		triangle = 'ravnobedrenniy'
	} else { triangle = 'raznostoronniy'}
	return triangle;
}
console.log (triangleCount(1, 3, 3));*/

var sideA = {x:13 , y:14};
var sideB = {x:8 , y:4};
var sideC = {x:16 , y:12};
function countCoordinates (sideA, sideB, sideC) {
	var a = Math.sqrt(Math.pow(sideB.x - sideA.x, 2) + Math.pow(sideB.y - sideA.y, 2));
	var b = Math.sqrt(Math.pow(sideC.x - sideB.x, 2) + Math.pow(sideC.y - sideB.y, 2));
	var c = Math.sqrt(Math.pow(sideA.x - sideC.x, 2) + Math.pow(sideA.y - sideC.y, 2));
	var halfPer = (a + b + c) / 2;
 	var square = Math.sqrt(halfPer * (halfPer - a) * (halfPer - b) * (halfPer - c));
 	console.log ("Square is: " + square);
 	 var triangle = 0;
	if (a == b && b == c && c == a) {
		triangle = "Равносторонний";
	} else if (a == b || b == c || c == a) {
		triangle = "Равнобедренный";
	} else { 
		triangle = "Разносторонний";
	}
	return triangle
}

console.log (countCoordinates (sideA, sideB, sideC));
	

