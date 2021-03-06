var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');

/*ctx.moveTo(0, 50);
ctx.lineTo(100, 150);
ctx.lineTo(300, 120);
ctx.lineTo(10, 50);
ctx.strokeStyle = 'green';
ctx.fillStyle = 'orange';
ctx.stroke();
ctx.fill();*/


function verticalParallel(n){
	ctx.beginPath();
	for(var i = 0; i < n; i++){
		var x = i * (c.width / n);
		ctx.moveTo(x, 0);
		ctx.lineTo(x, c.height);
		
}
ctx.stroke();
}

function horizontalParallel(m){
	ctx.beginPath();
	for (var j = 0; j < m; j++){
		var y = j * (c.height / m);
		ctx.moveTo(0, y);
		ctx.lineTo(c.width, y);
	}
	ctx.stroke();
}

function drawMatrix(matrix){
	verticalParallel(matrix.length);
	horizontalParallel(matrix[0].length);
	for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < matrix[0].length; j++){
			if(matrix[i][j] === 1){
				ctx.fillStyle = 'black';
				ctx.fillRect(i * (c.width / matrix.length), j * (c.height / matrix[0].length), 
					c.width / matrix.length, c.height / matrix[0].length);
			}
		}

	}	

}

function clearCanvas() {
	ctx.clearRect(0, 0, c.width, c.height);
}

// drawMatrix([[1, 0, 1], [10, 1, 0], [1, 0, 1]]);




