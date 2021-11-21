import { useEffect, useState } from 'react';

const ApiData = () => {
	const [students, setStudents] = useState({});

	useEffect(() => {
		const url = './studentList';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				for (const key in data) {
					setStudents((prevState) => [...prevState, data[key]]);
				}
			});
	});
	console.log(students);
	return students;
};

export default ApiData;
