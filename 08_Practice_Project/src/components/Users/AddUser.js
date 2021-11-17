import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const enteredUserNameHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const enteredAgeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim() === '' || enteredAge.trim() === '') {
			console.log('name if')
			setError({
				title: 'Please enter a valid name or age',
				message: 'Name/age cannot be empty',
			});
			return;
		}
		if (enteredAge < 1) {
			console.log('age if')
			setError({
				title: 'Please enter a valid age',
				message: 'Age must be > 1',
			});
			return;
		}

		console.log(enteredAge, enteredUserName);
		props.onAddUser(enteredUserName, enteredAge);
		setEnteredUserName('');
		setEnteredAge('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
			<Card className={classes.input}>
				<form onSubmit={formSubmitHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						onChange={enteredUserNameHandler}
						value={enteredUserName}
					></input>
					<label htmlFor='age'>Age(in Years)</label>
					<input
						id='age'
						type='number'
						onChange={enteredAgeHandler}
						value={enteredAge}
					></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
