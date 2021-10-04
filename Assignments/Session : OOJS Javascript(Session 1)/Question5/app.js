var invokevalue = 0;
var instancevalue = 0;

function age(current) {
	this.current = current;
	instancevalue += 1;
}

age.prototype.getFull = function () {
	invokevalue += 1;
	return this.current;
};
var a = new age(22);
var a1 = new age(26);
var a2 = new age(20);

console.log(a.getFull());
console.log(a1.getFull());
console.log(a2.getFull());
console.log('total no of invokation:' + invokevalue);
console.log('total no of instances:' + instancevalue);
