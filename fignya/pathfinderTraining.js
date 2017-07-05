/*function getRandom (max, min){
	var min = Math.ceil(min);
	var max = Math.floor(max);
	return Math.floor(Math.random()*(max + 1));
}

console.log (getRandom(8, 1));*/

function countAttack (data) {
	return data.bab + data.modifier + data.enchant + data.other;
}

function parseData() {
	var data = {};
	['bab', 'modifier', 'enchant', 'other'].forEach(function(name) {
		data[name] = parseInt(document.getElementById(name).value) || 0;
		if (data[name] < 0) {
			throw new Error('Something is lower than 0.');
		}
	});
	return data;
}
function attackData () {
	try {
		var data = parseData();
	} catch (error) {
		alert(error.message);
		return;
	}
	var final = countAttack(data);
	alert('your final attack is: ' + final);
}
document.getElementById("btn").onclick = attackData;