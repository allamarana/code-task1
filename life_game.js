/*var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');*/

function countNeighbours(matrix, x, y) {
	var count = 0;
	if(matrix[x + 1] && matrix[x + 1][y] === 1){
		count++;
	}
	if(matrix[x + 1] && matrix[x + 1][y - 1] === 1){
		count++;
	}
	if(matrix[x - 1] && matrix[x - 1][y] === 1){
		count++;
	}
	if(matrix[x - 1] && matrix[x - 1][y - 1] === 1){
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

function nextGeneration(matrix) {
	const newMatrix = createMatrix(matrix.length, matrix[0].length);
	var secondMatrix = newMatrix;
	for(var i = 0; i < newMatrix.length; i++){
		for(var j = 0; j < newMatrix[0].length; j++){
			var counter = countNeighbours(newMatrix, j, i);
			if (counter === 3) {
				secondMatrix[i][j] = 1;
			}
		}
	}
	return secondMatrix;
}


var matrix = createMatrix(5, 5);
setInterval(function() {
	drawMatrix(matrix);
	matrix = nextGeneration(matrix);
}, 1000);*/


console.log(countNeighbours([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 0, 0))
