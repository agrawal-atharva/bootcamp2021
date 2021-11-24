import { Fragment } from 'react';
import classes from './UserData.module.css';

const UserData = (props) => {
	console.log(props.value);
	// const name = props.value[0].firstName;
	// console.log(name)
	return (
		<Fragment>
			{props.value.length > 0 && (
				<table className={classes.table}>
					<thead>
						<tr>
							<th className={classes.text}>FirstName</th>
							<th className={classes.text}>LastName</th>
							<th className={classes.text}>Password</th>
						</tr>
					</thead>
					<tbody class='table-hover'>
						<tr>
							<td className={classes.text}>{props.value[0].firstName}</td>
							<td className={classes.text}>{props.value[0].lastName}</td>
							<td className={classes.text}>{props.value[0].password}</td>
						</tr>
					</tbody>
				</table>
			)}
			{props.value.length === 0 && <p>No record found</p>}
		</Fragment>
	);
};

export default UserData;
