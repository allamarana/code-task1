var c = document.getElementById('firstCanvas');
var ctx = c.getContext('2d');


class SnakeGame {
	constructor() {
		this.snake = [
		[4, 2], 
		[3, 2],
		[2, 2], 
		];
		this.direction = 'd'; 
	}

	getMatrix() {
		var matrix = createMatrix(50, 50);
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

	snakeDirection () {
		var x = this.snake[0][0];
		var y = this.snake[0][1];
		this.snake.pop();
		if(this.direction === 'r'){		
			this.snake.unshift([x + 1, y]);
		}
		if(this.direction === 'l'){
			this.snake.unshift([x - 1, y]);
		}
		if(this.direction === 'd'){
			this.snake.unshift([x, y + 1]);
		}
		if(this.direction === 'u'){
			this.snake.unshift([x, y - 1]);
		}
	}

	isRightDirection(){
		var headX = this.snake[0][0];
		var headY = this.snake[0][1];
		if (headX === this.snake[1][0] && headY === this.snake[1][1]) {
			return false;
		}
		return true;
	}
	

}

let snakeGame = new SnakeGame();
snakeGame.getMatrix();




setInterval(function() {
	clearCanvas();
	drawMatrix(snakeGame.getMatrix());
	snakeGame.snakeDirection();
}, 500);




