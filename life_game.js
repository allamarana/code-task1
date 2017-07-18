/*var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');*/

function countNeighbours(matrix, x, y) {
	var count = 0;
	/**
		0, +1
		0, -1

		+1, 0
		-1, 0

		-1, -1
		+1, +1

		-1, +1
		+1, -1
	**/
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
	if(matrix[x + 1] && matrix[x + 1][y + 1] === 1){
		count++;
	}
	if(matrix[x - 1] && matrix[x - 1][y + 1] === 1){
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
	for(var i = 0; i < newMatrix.length; i++){
		for(var j = 0; j < newMatrix[0].length; j++){
			var counter = countNeighbours(matrix, i, j);
			if (counter === 3) {
				newMatrix[i][j] = 1;
			} else if (matrix[i][j] === 1 && counter === 2) {
				newMatrix[i][j] = 1;
			}
		}
	}
	return newMatrix;
}


var matrix = [
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
];
setInterval(function() {
	clearCanvas();
	drawMatrix(matrix);
	matrix = nextGeneration(matrix);
}, 500);


