const c = document.getElementById('labCanvas');
const ctx = c.getContext('2d');

function createMatrix(m, n){
    const matrix = [];
    for(let i = 0; i < m; i++){
        matrix[i] = []
        for(let j = 0; j < n; j++){
            matrix[i][j]= -1;
        }
    }
    return matrix;
}

function randMatrix(matrix){
    let newM = matrix;
    for(let i = 0; i < newM.length; i++){
        for(let j = 0; j < newM[0].length; j++){
            newM[i][j] = Math.floor(Math.random() * 2);
        }
    }
    return newM;
}

function drawLab (random){
    const cellH = Math.floor(c.height/random.length);
    const cellW = Math.floor(c.width/random[0].length);
    ctx.fillRect(0, 0, c.width, c.height);
    for(let i = 0; i < random.length; i++ ){
        for(let j = 0; j < random[0].length; j++){
            if(random[i][j] === 0){
                ctx.clearRect(0 + i * cellW, 0 + j * cellH, cellW, cellH);
            }
        }
    }
}

function findRoute(matrix, random, s, f){
    let s = random[0][0];
    let f = random[random.length-1][random[0].length-1];
    let waves = [];
    while(i < waves.length){
        for(let i = 0; i <  ; i++){
            

        }
    }
        
}


const matrix = createMatrix(10, 10);
const random = randMatrix(matrix);
drawLab(random);


