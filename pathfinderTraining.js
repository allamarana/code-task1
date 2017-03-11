/*function getRandom (max, min){
	var min = Math.ceil(min);
	var max = Math.floor(max);
	return Math.floor(Math.random()*(max + 1));
}

console.log (getRandom(8, 1));*/

function countAttack (bab, modifier, enchant, other){
	var finalAttack = bab + modifier + enchant + other;
	return finalAttack;

}
function attackData (){
	var bab = parseInt(document.getElementById("bab").value) || 0;
	var modifier = parseInt(document.getElementById("mod").value) || 0;
	var enchant = parseInt(document.getElementById("enchant").value) || 0;
	var other =parseInt(document.getElementById("other").value) || 0;
	var final = countAttack (bab, modifier, enchant, other);
	if (bab < 0 || modifier < 0 || enchant < 0 || other < 0) {
		alert ('Something is lower than 0!');
	} else {
		alert ('your final attack is: ' + final);
	}

}
document.getElementById("btn").onclick = attackData;