var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
	(function (i) {
		setTimeout(function () {
			console.log('the element is:', i);
		}, 3000 * i);
	})(i);
}
