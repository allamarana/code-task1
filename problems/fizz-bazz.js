function fizzBuzz(n) {
	var arr = [];
	for (var i = 0; і <= n; i++){
		if (i % 3) { 
			arr = array.push ("Fizz") 
		} else if (i % 5) {
			arr = array.push ("Buzz")
		} else if (i % 3 && 5){
			"FizzBuzz"
		} else {

		}
		}

	}

}

*/const expected = [
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