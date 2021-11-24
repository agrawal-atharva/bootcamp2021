import './App.css';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';

function App() {
	const [userData, setUserData] = useState([]);
	const [userName, setUserName] = useState('');
	// const [finalUserData, setFinalUserData] = useState([]);

	useEffect(() => {
		const url = '/getuser';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				for (const key in data) {
					setUserData((prevState) => [...prevState, data[key]]);
				}
			});
	}, []);

	const inputDataHandler = (username) => {
		// console.log(username);
		setUserName(username);
	};

	const finalArray = userData.filter((data) => {
		return data.username === userName;
	});
	// setFinalUserData(finalArray);

	// console.log(finalArray);
	// console.log(userData);

	return (
		<Fragment>
			<SearchBar onSearch={inputDataHandler}></SearchBar>
			<UserData value={finalArray}></UserData>
		</Fragment>
	);
}

export default App;
