/*function sortFromHighest (num){
	var res = num.split("").sort(function(a, b){
		return b - a;
	}).join("")
	return res;
}


console.log(sortFromHighest(125463));*/

/*function cakes(recipe, available) {
  var recProp = Object.keys(recipe);
  var min = Infinity;
  for (var i = 0; i < recProp.length; i++){
     if (!available[recProp[i]]){
       return 0;
     }
     var num = Math.floor(available[recProp[i]] / recipe[recProp[i]]);
     if (min > num) {
       min = num;
     }
  }
  return min;
}

console.log(cakes(recipe = {flour: 500, sugar: 200, eggs: 1};
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

    function findOdd(A){
    	var odd = {};
    	for (var i = 0; i < A.length; i++) {
    		if (A[i] in odd){
    			odd[A[i]]++;
    		} else {
    			odd[A[i]] = 1;
    		}
    	 }
    	 for (var key in odd){
    	 	if(odd[key] % 2 !== 0){
    	 		return +key
    	 	}
    	 }
    }

    console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))*/


function disemvowel(str) {
	const vowels = ['a', 'o', 'i', 'e', 'u'];
  	return str
  		.split('')
  		.filter(char => !vowels.includes(char.toLowerCase()))
  		.join('');
}

console.log(disemvowel("This website is for losers LOL!"));

ffff

