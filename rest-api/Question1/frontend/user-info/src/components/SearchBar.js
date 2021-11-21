import { Fragment, useState } from 'react';

const SearchBar = (props) => {
	const [username, setUserName] = useState('');

	const userNameHandler = (event) => {
		let username = event.target.value;
		// console.log(username);
		setUserName(username);
	};

	props.onSearch(username);

	return (
		<Fragment>
			<h3>User Information</h3>
			<input
				type='text'
				placeholder='username'
				value={username}
				onChange={userNameHandler}
			/>
		</Fragment>
	);
};

export default SearchBar;
