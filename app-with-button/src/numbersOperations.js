var res = [];
export function addNum (a, b){
    var c = a + b;
    res [0] = c;
    return res;
}
export function deductNum (a, b){
    var c = a - b;
    res [0] = c;
    return res;
}
export function multiplyNum (a, b){
    var c = a * b;
    res [0] = c;
    return res;
}
export function divideNum (a, b){
    var c = a / b;
    res [0] = c;
    return res; 
}
export function powNum (a, b){
    var c = Math.pow(a, b);
    res [0] = c;
    return res;
}

