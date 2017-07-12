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

}


verticalParallel(20)
horizontalParallel(20)


