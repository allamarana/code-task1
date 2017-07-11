function foo(name) {
	function bar() {
		console.log(name);
	}
	return bar;
}

var ivan = foo('Ivan');
var luda = foo('luda');

ivan();
luda();
ivan();
luda();