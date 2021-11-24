import { Fragment, useState } from 'react';
import classes from './SearchBar.module.css';

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
			<div class='form__group'>
				<input
					type='text'
					className={classes.form__input}
					id='name'
					placeholder='Username'
					required=''
					onChange={userNameHandler}
				/>
			</div>
		</Fragment>
	);
};

export default SearchBar;
