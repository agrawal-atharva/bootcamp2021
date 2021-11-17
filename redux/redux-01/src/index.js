// import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const users = (state = [], action) => {
	console.log(action.type);
	switch (action.type) {
		case 'ADD': {
			return [...state, action.user];
		}
		case 'DELETE': {
			return state.filter((user) => user.id !== action.id);
		}
		default: {
			return state;
		}
	}
};

const store = createStore(users);
store.subscribe(() => {
	console.log('Store has changed!', store.getState());
});

const addUser = (user) => ({
	type: 'ADD',
	user,
});

const deleteUser = (id) => ({
	type: 'DELETE',
	id,
});

store.dispatch(addUser({ id: 1, name: 'John doe', email: "someemail" }));
store.dispatch(addUser({ id: 2, name: 'Manoj Nama', email: "manoj.nama@tothenew.com" }));
store.dispatch(addUser({ id: 3, name: 'Akash yadav', email: "akash@tothenew.com" }));
store.dispatch(deleteUser       (3));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
