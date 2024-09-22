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

    console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


function disemvowel(str) {
	const vowels = ['a', 'o', 'i', 'e', 'u'];
  	return str
  		.split('')
  		.filter(char => !vowels.includes(char.toLowerCase()))
  		.join('');
}

console.log(disemvowel("This website is for losers LOL!"));


function whatIsInAName(collection, source) {

	var arr = collection ;
   
	return arr.filter(obj => {
	 
	 for (prop in source){
	  let i = 0;
	  if(source[prop] !== obj[prop]){ 
		 return false
	  }   
	   }
	   return true;
	} 
	)
	
   }
   
	console.log( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
	

	function spinalCase(str) {
		return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/[^a-z]/g, "-");
	  }
	  
	  console.log(spinalCase('AllThe-small Thing'));
	  */

function translatePigLatin(str) {
	var newString = str.split('');
	var element;

	if(/[aeiouy]/.test(newString[0])){
		newString.push('way')
		return newString.join('');
	}

	var result = [];
	for (var i = 0; i < newString.length; i++){
		if (!/[aeiouy]/.test(newString[i])) {
			result.push(newString[i]);
		} else {
			// newString.push('ay');
			break;
		}
	}

	return newString.slice(i).join('') + result.join('') + 'ay';
	// return newString.join('').toLowerCase();
}
	  
console.log(translatePigLatin("consonant"));

//onsonantcway
//nsonantcoay