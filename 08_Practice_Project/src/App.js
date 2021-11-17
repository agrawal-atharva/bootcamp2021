import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [userList, setUserList] = useState([]);

	const onAddUserHandler = (uName, uAge) => {
		setUserList((prevUserData) => {
			return [
				...prevUserData,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
		console.log(userList);
	};

	return (
		<div>
			<AddUser onAddUser={onAddUserHandler} />
			{console.log(userList)}
			<UserList users={[userList]} />
		</div>
	);
}

export default App;
