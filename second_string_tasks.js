const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String);

function isDigit(char) {
	return digits.includes(char);
}

function isNumber(str) {
	return str.split('').every(isDigit);
}

function isNumber_(str) {
	for (var i = 0; i < str.length; ++i) {
		if (!digits.includes(str[i])) return false;
	}
	return true;
}


console.log(isNumber('124d3'));


function reverseString(str){
	var arr1, arr2;
	arr1 = str.split('');
	arr2 = [];
	for(var i = 0; i < str.length; i++){
		arr2.unshift(arr1[i]);
	}
	return arr2.join('');
}


function reverseStringSecond(str){
	return str.split('').reverse().join('');

}

console.log(reverseStringSecond('hello'));

function startsWith(str, letters){
	return str.indexOf(letters) === 0;
}

console.log(startsWith("hello, world!", "he"));

function createArray(num){
	var arr = [];
	for( var i = 0; i <= num; i++){
		arr.push(i);
	}
	return arr;
}

function returnSquare(n){
	var arr1 = createArray(n);
	var arr2 = [];
	for(var i = 1; i <= n; i++){
		if(Math.pow(i, 2) <= n){
			arr2.push(Math.pow(i, 2));
		}
		
	}
	return arr2;
}

console.log(returnSquare(25));





