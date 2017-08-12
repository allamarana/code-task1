/*function sortFromHighest (num){
	var res = num.split("").sort(function(a, b){
		return b - a;
	}).join("")
	return res;
}


console.log(sortFromHighest(125463));*/

function cakes(recipe, available) {
  var recProp = Object.keys(recipe);
  var res = [];
  for (var i = 0; i < recProp.length; i++){
     if (available[recProp[i]] === undefined){
       return 0;
     } else {
       if(Math.floor(recipe[recProp[i]] % available[recProp[i]) >= res){
         res.push(Math.floor(recipe[recProp[i]] % available[recProp[i]));
       }
     }
  }
  return res;
}