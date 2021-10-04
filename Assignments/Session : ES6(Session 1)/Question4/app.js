const user = {
	firstName: 'Atharva',
	lastName: 'Agrawal',
	Address: {
		Line1: '56, Bajrangpara Ward-8',
		Line2: 'Suplea road',
		State: 'Chhattisgarh',
		Pin: 490023,
		Country: 'India',
		City: 'Bhilai',
	},
	phoneNo: 9999999999,
};

let {
	firstName,
	lastName,
	Address: { Line1, Line2, State, Pin, Country, City },
	phoneNo,
} = user;

console.log(
	`My name is ${firstName} ${lastName}.
    My Address is ${Line1} ${Line2}, ${State}, ${Pin}, ${Country}, ${City}.
    My phone number is ${phoneNo}`
);
