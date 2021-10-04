function myFunc() {
	var count = 0;
	function counter() {
		count++;
		return count;
	}
	return counter;
}

var increase = myFunc();

document.getElementById('submit').addEventListener('click', function () {
	document.getElementById('counter').innerHTML = increase();
});
