function test() {
	let foo = 1;

	if (foo === 1) {
		let foo = 22;
		console.log(foo); // 22
	}

	if (foo === 22) {
		// will not execute
		let foo = 33;
		console.log(foo);
	}

	console.log(foo); // 1
}

test();

const myFun = (name, age) => {
	return `My name is ${name} and I am ${age} years old.`
}

console.log(myFun('Atharva', 22));