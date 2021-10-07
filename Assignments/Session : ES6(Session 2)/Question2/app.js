const Maps = new Map();
var index = 0;
function totalcombi(string) {
	var myFunction = function (current, rest, arr) {
		if (!current && !rest) {
			return;
		}
		if (!rest) {
			arr.push(current);
			Maps.set(index, arr[index]);
			index++;
		} else {
			myFunction(current + rest[0], rest.slice(1), arr);
			myFunction(current, rest.slice(1), arr);
		}
		return arr;
	};
	return myFunction('', string, []);
}
console.log(totalcombi('Atharva'));
console.log(Maps);
