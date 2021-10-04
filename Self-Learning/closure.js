function counter() {
	var defaultCounter = 0;
	function changeDefault(value) {
		defaultCounter += value;
	}
	return {
		increment: function () {
			changeDefault(1);
		},

        decrement: function () {
            changeDefault(-1);
        },

        value: function () {
            return defaultCounter;
        }
	};
}

var counter1 = counter();
counter1.increment();
console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());
