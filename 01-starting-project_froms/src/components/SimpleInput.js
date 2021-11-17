import { useState } from 'react';
import '../index.css';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [isNameValid, setIsNameValid] = useState(true);

	const getNameHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		console.log(enteredName);

		if (enteredName.trim() === '') {
			setIsNameValid(false);
		}

		setIsNameValid(true);
		setEnteredName('');
	};

	const nameInputClasses = isNameValid
		? 'from-control'
		: 'form-control invalid';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={getNameHandler}
					value={enteredName}
				/>
			</div>
			{!isNameValid && <p className='error-text'>Name must not be empty</p>}
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
