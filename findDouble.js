function find (arr){
	var sorted = arr.sort((a,b) =>  a - b)
	for (var i = 0; i < arr.length; i++){
		
		if (arr[i] === arr[i+1]){
			return true;
		} 
		
	} 
	
	return false;
}

function nonSorted (arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			if (arr[i]=== arr[j]){
				return true
			}

		}
	}
	return false;
}



function findDouble(arr){
	var mySet = new Set();
	for (var i = 0; i < arr.length; i++){
		if(mySet.has(arr[i])){
			return true
		}
		mySet.add(arr[i]);
	}
	return false
}


if (findDouble([19,3,4,1,2,7,6,8,11,5,10,14,9,9,13,12])){
	console.log("We found it!")
} else{
	console.log("Not in my array, dude!")
}

