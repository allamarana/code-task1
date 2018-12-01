function check (arr1, arr2){
	var result = [];
	for(var i = 0; i < arr1.length; i++){
		for( var j = 0; j < arr2.length; j++){
			if (arr1[i] == arr2[j]){
				result.push(arr1[i]); 
			}

		}
	}
	return result;
}

console.log(check([0, 55, 333, 5, 31,1,2,13,22,34], [1,31, 55, 0, 14,13,44,22])) 