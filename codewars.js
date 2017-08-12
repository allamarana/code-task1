/*function sortFromHighest (num){
	var res = num.split("").sort(function(a, b){
		return b - a;
	}).join("")
	return res;
}


console.log(sortFromHighest(125463));*/

function cakes(recipe, available) {
  var recProp = Object.keys(recipe);
  //var res = [];
  for (var i = 0; i < recProp.length; i++){
     if (available[recProp[i]] === undefined){
       return 0;
     } /*else {
     	var num = recipe[recProp[i]] % available[recProp[i];
       if(Math.floor(num) >= res){
         res.push(Math.floor(num));
       }
     }
  }
  return res;*/
}

console.log(cakes(recipe = {apples: 50, flour: 500, sugar: 200, eggs: 1},
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))