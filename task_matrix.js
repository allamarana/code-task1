function createMatrix(m, n) {
	var matrix = [];
	for(var i = 0; i < m; i++){
		matrix[i] = [];
		for(var j = 0; j < n; j++){
			matrix[i][j] = 0;
		}
	}
	return matrix;

}

function fillMatrix (matrix) {
	var m = matrix.length;
	var n = matrix[0].length;
	for(var i = 0; i < m; i++){
		for(var j = 0; j < n; j++){
			matrix[i][j] = j + 1 + m * i;
		}
	}
	return matrix;
}


/*function fillSnakeMatrix() {

}

function fillRandomMatrix(matrix, a, b) {

	}
	return matrix;
}

function findMax(matrix) {

}*/


var matrix = createMatrix(3, 3);
console.log(fillMatrix(matrix));




