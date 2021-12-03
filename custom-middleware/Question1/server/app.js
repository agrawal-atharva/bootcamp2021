const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
app.use(
	session({
		name: 'id',
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 10,
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
	{ id: 2, name: 'Bharat', email: 'brat@gmail.com', password: 1999 },
	{ id: 3, name: 'Kiran', email: 'kiran@gmail.com', password: 2098 },
];
//Middleware for session validation
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

app.get('/fallback', (req, res) => {
	res.write('<h1>Credentials didn"t matched</h1>');
});

app.get('/home', redirectLogin, (req, res) => {
	res.send('<h1>Home</h1>');
});

app.get('/login', (req, res) => {
	res.write('<h1>Login</h1>');
	res.write("<form method='post' action='/login'>");
	res.write('<input type="email" name="email" placeholder="Enter email" />');
	res.write(
		'<input type="password" name="password" placeholder="Enter pass" />'
	);
	res.write('<button type="submit">Submit</button>');
	res.write('</form>');
	res.send();
});
app.post('/login', (req, res) => {
	const { email, password } = req.body;
	console.log(email, password)
	const user1 = users.find(
		(user) => user.email === email && user.password === password
	);
	console.log(user1);
	if (user1) {
		req.session.userId = user.id;
		return res.redirect('/home');
	} else {
		return res.redirect('/fallback');
	}
});
app.listen(3000, () => {
	console.log('listening on 3000');
});
