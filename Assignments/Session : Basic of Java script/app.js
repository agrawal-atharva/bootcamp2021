function getTime() {
	var today = new Date(); // to get today's complete date
	var wish; //variable for greeting
	var session = 'AM'; //AM or PM
	var hours = today.getHours(); //extracting hours from Date()
	var mins = today.getMinutes(); //extracting minutes from Date()
	var seconds = today.getSeconds(); //extracting seconds from Date()
	var date = today.getDate(); //extracting date from Date()
	var month = today.getMonth(); //extracting month from Date()
	//array to convert into string months
	var monthString = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	month = monthString[month];
	var year = today.getFullYear(); //extracting year from Date()

	//setting up the greeting
	if (hours < 12) {
		wish = 'Good Morning';
	} else if (12 < hours <= 18) {
		wish = 'Good Evening';
	} else {
		wish = 'Good Night';
	}

	//changing session to PM
	if (hours > 12) {
		session = 'PM';
	}

	//converting hours to 12 Hour format
	hours = hours % 12;
	if (hours == 0) {
		hours = 12;
	}

	//adding prefix 0 to single digit values
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (mins < 10) {
		mins = '0' + mins;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	var time = hours + ':' + mins + ':' + seconds + ':' + session;
	var fullDate = date + ' ' + month + ' ' + year;

	document.getElementById('wish').innerHTML = wish;
	document.getElementById('time').innerHTML = time;
	document.getElementById('date').innerHTML = fullDate;
}

getTime();
