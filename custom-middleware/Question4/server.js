const server = () => {
	return 'This file is running from child process but not directly';
};

console.log(server());