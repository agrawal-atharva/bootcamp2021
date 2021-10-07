const flat = () => {
	var Array = [
		['My', 'Name'],
		['is', 'Atharva', 'Agrawal'],
		['Happy', 'to', 'see', 'you!'],
	];
	var myNewArray = [].concat(...Array);
	return myNewArray;
};
console.log(flat());
