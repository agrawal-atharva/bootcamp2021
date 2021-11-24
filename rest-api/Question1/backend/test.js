const input = 'atharva';

const arr = [
	{ name: 'atharva', age: 20 },
	{ name: 'bharat', age: 20 },
	{ name: 'aayush', age: 20 },
	{ name: 'piyush', age: 20 },
];

const result = arr.filter((data) => {
	if(data.name === input){
        console.log(data);
    }
});
// console.log(result);
