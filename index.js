var path = require('path')
var express = require('express')
var app = express();
var indexRouter = require('./routes/index')
var userRouter = require('./routes/users')
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use('/', indexRouter)
app.use('/users', userRouter)

/*app.get('/', function(req, res){
	res.send('hello world');
})

app.get('/users/:name', function(req, res){
	res.send('hello,' + req.params.name)
	console.log(req.query)
})*/

app.listen(3000)