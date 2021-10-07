// -----bind-----

var person = {
	name: 'Atharva',
	print: function () {
		console.log('Name is: ', this.name);
	},
};
var p = person.print;
p();

p = p.bind(person);
p();

// ----call---

var person2 = {
	name: 'Agrawal',
	print: function () {
		console.log('Name is:', this.name);
	},
};
person2.print.call(person);
