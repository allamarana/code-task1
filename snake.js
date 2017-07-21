var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');

function applySnakeToMatrix(snake, matrix){
	for(var i = 0; i < snake.length; i++){
		var x = snake[i][0];
		var y = snake[i][1];
		matrix[x][y] = 1;
	}

}

function snakeDirection(snake, direction, matrix){
	var x, y;
	if(direction === 'right'){
		x = snake[0][0];
		y = snake[0][1];
		matrix[x][y] = 0
		snake.push([snake[2][0] + 1, snake[2][1]]);
	}
	if(direction === 'left'){
		x = snake[2][0];
		y = snake[2][1];
		matrix[x][y] = 0
		snake.push([snake[0][0] - 1, snake[0][1]]);
	}
	if(direction === 'down-left'){
		x = snake[2][0];
		y = snake[2][1];
		matrix[x][y] = 0
		snake.push([snake[0][0], snake[0][1] + 1]);
	}
	if(direction === 'up-left'){
		x = snake[2][0];
		y = snake[2][1];
		matrix[x][y] = 0
		snake.push([snake[0][0], snake[0][1] - 1]);
	}
	if(direction === 'down-right'){
		x = snake[0][0];
		y = snake[0][1];
		matrix[x][y] = 0
		snake.push([snake[2][0], snake[2][1] + 1]);
	}
	if(direction === 'up-right'){
		x = snake[0][0];
		y = snake[0][1];
		matrix[x][y] = 0
		snake.push([snake[2][0], snake[2][1] - 1]);
	}
}

var snake = [
	[2, 2],
	[3, 2],
	[4, 2],
];

setInterval(function() {
	clearCanvas();
	var matrix = createMatrix(10, 10);
	applySnakeToMatrix(snake, matrix);
	snakeDirection(snake, 'up-right', matrix);
	drawMatrix(matrix);
}, 500);