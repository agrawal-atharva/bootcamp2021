import { array } from './script.js';

const mySet = new Set();
console.log(array);

for (var i = 0; i < array.length; i++) {
	mySet.add(array[i]);
}
console.log(mySet);
