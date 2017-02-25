function triangleCount (a, b, c) {
	var triangle = 0;
	if (a == b && b == c && c == a) {
		triangle = 'ravnostoronniy';
	} else if (a == b || a == c || b == c) {
		triangle = 'ravnobedrenniy'
	} else { triangle = 'raznostoronniy'}
	return triangle;
}
console.log (triangleCount(1, 3, 3));