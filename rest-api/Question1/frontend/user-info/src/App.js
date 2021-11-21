import './App.css';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';

function App() {
	const [userData, setUserData] = useState([]);
	const [userName, setUserName] = useState('');

	const inputDataHandler = (username) => {
		console.log(username);
		setUserName(username);
	};

  

	useEffect(() => {
		const url = '/getuser';
		const users = fetch(url)
			.then((response) => response.json())
			.then((data) => {
				for (const key in data) {
					setUserData((prevState) => [...prevState, data[key]]);
				}
			});
	}, []);

	return (
		<Fragment>
			<SearchBar onSearch={inputDataHandler}></SearchBar>
			<UserData users={userData}></UserData>
		</Fragment>
	);
}

export default App;
