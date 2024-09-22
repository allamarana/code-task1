/*class Worker {
	constructor(hours, time){
		this.hours=hours
		this.time=time
	}
	getSalary() {
		var salary = this.hours * this.time
		return salary;
	}

}

var a = new Worker(10, 20)
var test = a.getSalary;
console.log(test.apply(a));

/*class FirstWorker extends Salary{
	constructor(){

	}
	

}

class SecondWorker extends Salary{
	
	countSalary(){

	}
}*/

/*function aaa(){
	var a = this.a;
	//console.log(this);
	a = 5
	//console.log(this.a)
}
aaa();
console.log(this)
console.log(this.a)*/

function foo (arr1, arr2){
	/*var arr = array;
	for (var i = 0; i < arr.length-1; i++ ) {
    	if (arr[i] === arr[i + 1]) {
		  arr.splice(i, 2);
		  i = i - 2;
		  console.log(arr);
		} 

	}


return arr 
	const set1 = new Set (arr1);
	const set2 = new Set (arr2);
	var result = [];
	for (var i = 0; i < arr1.length; i++){
		if(!set2.has(arr1[i])){
			result.push(arr1[i]);
		}
	}
	for (var j = 0; j < arr2.length; j++){
		if(!set1.has(arr2[j])){
			result.push(arr2[j]);
		}
	}
	return result;
}

console.log(foo ([1, 2, 3, 4, 5, 'cat'], [2, 3, 4, 'cat', 'dog']));*/


function foo (arr){
	var arg = arguments.value
}