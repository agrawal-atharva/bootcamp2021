class Stackusingll {
	constructor() {
		this.items = [];
	}

	push = function (element) {
		return this.items.push(element);
	};

	pop = function () {
		return this.items.pop();
	};

	size = function () {
		return this.items.length;
	};

	peek = function () {
		return this.items[this.items.length - 1];
	};
}
const Stack = new Stackusingll();
Stack.push(10);
Stack.push(8);
Stack.push(12);
Stack.push(4);
Stack.push(2);
console.log(Stack.items);
console.log(Stack.peek());
console.log(Stack.pop());
console.log(Stack.size());
