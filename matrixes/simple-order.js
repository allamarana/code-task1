function createMatrix(n, m) {
	var matrix = [];
	for(var i = 0; i < n; i++) {
		matrix[i] = [];
		for(var j = 0; j < m; j++) {
			var v = j + 1 + i * n
			if (i % 2 == 0) {
				matrix[i][j] = v;
			} else {
				matrix[i][m - j - 1] =  v;
			}
		}
	}
	return matrix;
}

console.log(createMatrix(8, 8));