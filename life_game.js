/*var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');*/

function countNeighbours(matrix, x, y) {
	var count = 0;
	if(matrix[x + 1] && matrix[x + 1][y] === 1){
		count++;
	}
	if(matrix[x + 1][y - 1] === 1){
		count++;
	}
	if(matrix[x - 1][y] === 1){
		count++;
	}
	if(matrix[x - 1][y - 1] === 1){
		count++;
	}
	if(matrix[x][y + 1] === 1){
		count++;
	}
	if(matrix[x][y - 1] === 1){
		count++;
	}
	return count;
}

/*function nextGeneration(matrix) {
	const newMatrix = createMatrix(matrix.length, matrix[0].length);

	return matrix;
}


var matrix = createMatrix(...);
setInterval(function() {
	drawMatrix();
	matrix = nextGeneration(matrix);
}, 1000);*/


console.log(countNeighbours([[1, 0, 1], [0, 0, 0], [1, 0, 0]], 2, 2))
