var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');

function applySnakeToMatrix(snake, matrix){
	

}

class SnakeGame {
	constructor() {
		this.snake = [
		[4, 2], 
		[3, 2],
		[2, 2], 
		];
		this.direction = 'down'; 

		// this.nextStep = 
	}

	getMatrix() {
		var matrix = createMatrix(5, 5);
		for(var i = 0; i < this.snake.length; i++){
			var x = this.snake[i][0];
			var y = this.snake[i][1];
			matrix[x][y] = 1;
		}
		return matrix;
	}

	nextStep() {
		console.log('next');
	}

}

let snakeGame = new SnakeGame();
snakeGame.getMatrix();

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

function isRightDirection(snake, direction){
	i
}


setInterval(function() {
	clearCanvas();
	var matrix = createMatrix(10, 10);
	applySnakeToMatrix(snake, matrix);
	drawMatrix(matrix);
	snakeDirection(snake, 'up', matrix);
}, 500);




