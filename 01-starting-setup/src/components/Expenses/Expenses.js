import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		// console.log('Expense.js')
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onValueChange={filterChangeHandler}
				/>
				<ExpenseChart expense={filteredExpenses}/>
				<ExpenseList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;