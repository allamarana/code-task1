/*function findPalindrom (string) {
	for(var i = 0; i < string.length/2; i++){
		if(string[i] !== string[string.length - 1 - i]){
			return false;
		}
	}
	return true;
//istrue == (string.length/2) ? console.log('You found palindrom!'): console.log("You are loh!");
	}


function isAnagram(str1, str2){
	var arr1 = str1.split('');
	var arr2 = str2.split('');
	for (var i = 0; i < arr1.length; i++) {
		var spliced = false;
		for(var j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				arr2.splice(j, 1);
				spliced = true;
			}
		}
		if (spliced !== true) return false;
	}

	return arr2.length === 0;

}

console.log(isAnagram('abc', 'ab'));*/

function findAnagram(str1, str2){
	if (str1.length !== str2.length) return false;
	return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(findAnagram('abc', 'aba'))
/*console.log(findPalindrom('aba'))
//console.log(isAnagram('abd', 'cba'))


function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}

function likes(names) {
  var res = 0;
  if (names = []) {
    res = "no one likes this";
  } else {
  for (var i = 0; i < names.length; i++){
    res = names[i];
  }
  }
  return res;

}
console.log(likes(["Peter", "PAvel"]));*/


