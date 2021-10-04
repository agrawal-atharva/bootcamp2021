let a = 1;
// let b = 2;
try {
	a = 1 / b;
	console.log(`New value of a is ${a}`);
} catch (error) {
	console.log(error.message);
} finally {
	console.log(`Final value of a is ${a}`);
}
