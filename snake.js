var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');

function applySnakeToMatrix(snake, matrix){
	for(var i = 0; i < snake.length; i++){
		var x = snake[i][0];
		var y = snake[i][1];
		matrix[x][y] = 1;
	}

}

function snakeDirection(snake, direction){
	var x = snake[0][0];
	var y = snake[0][1];
	snake.pop();
	if(direction === 'right'){		
		snake.unshift([x + 1, y]);
	}
	if(direction === 'left'){
		snake.unshift([x - 1, y]);
	}
	if(direction === 'down'){
		snake.unshift([x, y + 1]);
	}
	if(direction === 'up'){
		snake.unshift([x, y - 1]);
	}
}

var snake = [
	[4, 2], // HEAD
	[3, 2],
	[2, 2], // Tail
];

setInterval(function() {
	clearCanvas();
	var matrix = createMatrix(10, 10);
	applySnakeToMatrix(snake, matrix);
	drawMatrix(matrix);
	snakeDirection(snake, 'up', matrix);
}, 500);




