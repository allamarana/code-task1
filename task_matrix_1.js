

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
			matrix[i][j] = j + 1 + n * i;
		}
	}
	return matrix;
}


function fillSnakeMatrix(matrix) {
	var m = matrix.length;
	var n = matrix[0].length;
	for(var i = 0; i < m; i++){
		for(var j = 0; j < n; j++){
			if (i % 2 === 0) {
				matrix[i][j] = j + 1 + n * i;
			} else {
				matrix[i][j] =  ((n * i) + n) - j;
			}
		}
	
	}
	return matrix;
}

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function fillRandomMatrix(matrix, a, b) {
	var m = matrix.length;
	var n = matrix[0].length;
	for(var i = 0; i < m; i++){
		for(var j = 0; j < n; j++){
			matrix[i][j] = randomNum(a, b);

		}
	}

	return matrix;
}

function findMax(matrix) {
	var m = matrix.length;
	var n = matrix[0].length;
	var max = 0;
	for(var i = 0; i < m; i++) {
		for(var j = 0; j < n; j++){ 
			if(matrix[i][j] > max){ 
				max = matrix[i][j];
			}
		}		
	}
	return max;

}

function createUpperTriangleMatrix(sizeOfMatrix, fillValue) {
	var matrix = createMatrix(sizeOfMatrix, sizeOfMatrix);
	for(var i = 0; i < sizeOfMatrix; i++){
		for(var j = 0; j < sizeOfMatrix; j++){
			if(j >= i){
				matrix[i][j] = fillValue;
			}
			
		}
	}
	return matrix;
}


function createLowerTriangleMatrix(sizeOfMatrix, fillValue) {
	var matrix = createMatrix(sizeOfMatrix, sizeOfMatrix);
	for(var i = 0; i < sizeOfMatrix; i++){
		for(var j = 0; j < sizeOfMatrix; j++){
			if(j <= i){
				matrix[i][j] = fillValue;
			}
			
		}
	}
	return matrix;
}


function transponeMatrix(matrix) {
	var m = matrix.length;
	var n = matrix[0].length;
	for (var i = 0; i < matrix.length; ++i) {
		for (var j = i; j < matrix[0].length; ++j) {
			var tmp = matrix[j][i];
			matrix[j][i] = matrix[i][j];
			matrix[i][j] = tmp;
		}
	}
	return matrix;
}

console.log(transponeMatrix([
	[11, 12, 13, 14], 
	[15, 16, 17, 18],
	[19, 20, 21, 22],
	[23, 24, 25, 26]
]))
/*
123		147
456		258
789 	369
*/

/*var matrix = createMatrix(5, 10);
console.log(fillSnakeMatrix(matrix));
console.log(fillRandomMatrix(matrix, 1, 20));
console.log(findMax(fillRandomMatrix(matrix, 1, 20)));
console.log(createLowerTriangleMatrix(5, 1))*/


