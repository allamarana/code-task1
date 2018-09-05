function sort (arr){
    var array = arr;
    var temp;
    for(var j = 0; j < array.length; j++){
        for (var i = 0; i < array.length; i++){
        if(arr[i] >= arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        } 
        if (typeof arr[i] != 'number' ){
            console.log("Invalid data!")
            return
        }
        }
    }
return arr;
}

console.log(sort([1, 'dofof',5,6,-3,2,4]))