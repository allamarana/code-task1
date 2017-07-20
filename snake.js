var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');

function applySnakeToMatrix(snake, matrix){
	for(var i = 0; i < snake.length; i++){
		var x = snake[i][0];
		var y = snake[i][1];
		matrix[x][y] = 1;
	}

}

var snake = [
	[0, 0],
	[1, 0],
	[2, 0],
];

setInterval(function() {
	clearCanvas();
	var matrix = createMatrix(10, 10);
	applySnakeToMatrix(snake, matrix);
	drawMatrix(matrix);
}, 500);