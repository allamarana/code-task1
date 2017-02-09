function createMatrix(n, m) {
	var matrix = [];
	for(var i = 0; i < n; i++) {
		matrix[i] = [];
		for(var j = 0; j < m; j++) {
			matrix[i][j] = j + 1 + i * n;
		}
	}
	return matrix;
}

console.log(createMatrix(8, 8));