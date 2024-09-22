// function chunk(arr, number){
//     var arr = arr;
//     var removed = [];
//     var final = [];
//     while (arr.length !== 0){
//         removed = arr.splice(0, number);
//         final.push(removed);
//     }
//     return final;
// }

function compact(arr){
    return arr.filter(Boolean);
}

// todo: use for-of
function concat(...args){
    var array = []
    for (var i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])){
            array.push(...args[i]);
        }
        else {
            array.push(args[i])
        }
    }
    return array;
}

var ar = [1];
console.log(concat(ar, [1, 2, 3]));
console.log(ar)


// [1, 2, [3, 4]]
// [1, 2, 3, 4]