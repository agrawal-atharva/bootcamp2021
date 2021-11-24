import { Fragment, useEffect, useState } from 'react';
import './App.css';
import BasicTable from './components/BasicTable';

function App() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		fetch('/studentList')
			.then((response) => response.json())
			.then((data) => {
				for (const key in data) {
					setStudents((prevState) => [...prevState, data[key]]);
				}
				console.log(JSON.s(students));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [students]);

	return (
		<Fragment>
			<BasicTable></BasicTable>
		</Fragment>
	);
}

export default App;
