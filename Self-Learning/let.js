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
