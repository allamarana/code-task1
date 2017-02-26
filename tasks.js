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


function countCoordinates (a, b, c, d, e, f) {
	var x = ((c - a) ^ 2) + ((d - b) ^ 2);
	var y = ((e - c) ^ 2) + ((f - d) ^ 2);
	var z = ((a - e) ^ 2) + ((b - f) ^ 2);
	return x, y, z;
}

function triangleSquare () {
 countCoordinates (a, b, c, d, e, f);
 var per = (x + y + z) / 2;
 var square = Math.sqrt(per * (per - x) * (per - y) * (per - z));
 return square;
}

function triangleCoordinates () {
	countCoordinates (a, b, c, d, e, f);
	var triangle = 0;
	if (x == y && y == z && z == x) {
		triangle = "Равносторонний";
	} else if (x == y || y == z || z == x) {
		triangle = "Равнобедренный";
	} else { 
		triangle = "Разносторонний";
	}
	return triangle
}

console.log (countCoordinates (1, 2, 3, 4, 5, 6));