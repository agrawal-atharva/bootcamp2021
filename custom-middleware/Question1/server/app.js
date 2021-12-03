const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(
	session({
		name: 'sid',
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 3600 * 60 * 60,
			secure: false,
			sameSite: true,
		},
	})
);

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const users = [
	{ id: 1, name: 'Atharva', email: 'atharva@gmail.com', password: 1234 },
	{ id: 2, name: 'Harry', email: 'harry@gmail.com', password: 1234 },
	{ id: 3, name: 'Cherry', email: 'cherry@gmail.com', password: 1234 },
];

const redirectLogin = (req, res, next) => {
	if (!req.session.userId) {
		res.redirect('/login');
	} else {
		next();
	}
};

app.get('/', (req, res) => {
	const { userId } = req.session;
	res.write('<h1>Welcome</h1>');
	res.write(
		`${!userId ? "<a href='/login'>login</a>" : "<a href='/home'>Home</a>"}`
	);
	res.send();
});

app.get('/home', redirectLogin, (req, res) => {
	res.send('<h1>Home</h1>');
});

app.get('/login', (req, res) => {
	res.send(`<form method='POST' action='/login'>
        <input type="email" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter pass" />
        <input type="submit" />
    </form>`);
});

app.post('/login', (req, res) => {
	const { email, password } = req.body;
	console.log(email);
	console.log(password);
	console.log(users);
	let user1 = users.find(
		(user) => user.email === email && user.password === parseInt(password)
	);
	console.log(user1);

	if (user1) {
		req.session.userId = user1.id;
		return res.redirect('/home');
	}

	res.redirect('/');
});

app.listen(3000, () => {
	console.log('listening on 3000');
});
