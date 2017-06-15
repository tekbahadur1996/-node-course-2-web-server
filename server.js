
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res) => {
	res.render('help.hbs', {
		message: "welcome",
		heading: 'main page',
		currentYear: new Date().getFullYear()
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs',{
		heading: 'main page',
		currentYear: new Date().getFullYear()
	})
});

app.get('/bad', (req, res) =>{
	res.send('<h1 style="color:red;">error</h1>')
});

app.listen(port, function(){
	console.log(`starting server at ${port}`);
});
