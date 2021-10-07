var data = [2, 2, 2, 3, 4, 5, 6, 6, 6, 7, 1];
var Maps = new Map();
var Sets = new Set();
for (var i = 0; i < data.length; i++) {
	Maps.set(i, data[i]);
	Sets.add(data[i]);
}
console.log(Maps);
console.log(Sets);
for (var i = 0; i < data.length; i++) {
	console.log(Maps.get(i));
}
console.log(Sets.has(5));
