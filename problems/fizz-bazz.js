function fizzBuzz(n) {
	var arr = [];
	for (var i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			arr.push("FizzBuzz");
		} else if (i % 3 == 0) { 
			arr.push ("Fizz");
		} else if (i % 5 == 0) {
			arr.push ("Buzz");
		} else { 
			arr.push(i);
		}
	}
	return arr;
}


console.log(fizzBuzz(15));

const expected = [
	1,
	2,
	'Fizz',
	4,
	'Buzz',
	'Fizz',
	7,
	8,
	'Fizz',
	'Buzz',
	11,
	'Fizz',
	13,
	14,
	'FizzBuzz'
];
if (fizzBuzz(15).join(' ') !== expected.join(' ')) {
	throw new Error('test not passed');
}
console.log('All tests is ok.');