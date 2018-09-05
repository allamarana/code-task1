export function findSquareRoot (a, b, c) {
    var x;
    var d =  Math.pow(b, 2)  - 4 * a * c
    var x1 = (-b - Math.sqrt(d)) / (2 * a)
    var x2 = (-b + Math.sqrt(d)) / (2 * a)
    if (d > 0) {
        return [x1, x2];
    }
    if (d === 0){
        return [x1];
    }
    if (d < 0){
        return [];
    }

}
// findSquareRoot(4, 0, -16);