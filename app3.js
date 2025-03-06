const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

const users = { user: 'p' }; 
const passwords={password: '12345'};


app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
    } else {
        res.render('logowanie');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users.user===username) {
        req.session.loggedIn = true;

        res.redirect('/home');
    } else {
        res.send('Nieprawidłowy login lub hasło');
    }
});

app.get('/home', (req, res) => {
    if (req.session.loggedIn) {
        console.log("home  "+ req.session.username);
        res.render('home');
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
