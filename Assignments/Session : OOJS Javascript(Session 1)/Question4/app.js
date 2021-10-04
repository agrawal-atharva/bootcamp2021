function Fun1() {
	return function (a) {
		if (a <= 1) return 1;
		return a * arguments.callee(a - 1);
	};
}
var ans = Fun1()(10);
console.log(ans);

function Fun2() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	return sum;
}
var total = Fun2(10, 20, 30);
console.log(total);

function Fun3() {
	for (let letter of arguments) {
		console.log(letter);
	}
}
Fun3('A', 't', 'h', 'a', 'r', 'v', 'a');
