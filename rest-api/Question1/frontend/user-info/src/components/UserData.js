import { Fragment } from 'react';

const UserData = (props) => {
    console.log(props.users)
	return (
		<Fragment>
			<table>
				<th>
					<td>FirstName</td>
					<td>LastName</td>
					<td>UserName</td>
				</th>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</table>
		</Fragment>
	);
};

export default UserData;
