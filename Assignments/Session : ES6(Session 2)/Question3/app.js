class person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getname() {
		return 'My name is' + this.name + 'and I am ' + this.age;
	}
}

class headprogrammer extends person {
	constructor(name, age, yearofexperience) {
		super(name, age);
		this.yearofexperience = yearofexperience;
	}
	getname2() {
		return (
			'My name is : ' +
			this.name +
			' & my age is ' +
			this.age +
			'plus I have experience of' +
			this.yearofexperience
		);
	}
}
class juniorprogrammer extends headprogrammer {
	constructor(name, age, yearofexperience, profile) {
		super(name, age, yearofexperience);
		this.profile = profile;
	}
	getname3() {
		return super.getname2() + 'I work as a:' + this.profile;
	}
}
let person1 = new person('Atharva', 22);
let headprogrammer1 = new headprogrammer('Bharat', 21, 2);
let juniorprogrammer1 = new juniorprogrammer(
	'Manan',
	23,
	2,
	'Software Engineer'
);

console.log(person1.getname());
console.log(headprogrammer1.getname2());
console.log(juniorprogrammer1.getname3());
