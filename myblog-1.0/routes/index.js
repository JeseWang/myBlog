var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var index = fs.readFileSync('./public/index.html', 'utf-8')
  res.send(index);
});

router.get('/blog', function(req, res){
	var blog = fs.readFileSync('./public/blog.html', 'utf-8')
	res.send(blog);
})

router.get('/about', function(req, res){
	var about = fs.readFileSync('./public/about.html', 'utf-8')
	res.send(about);
})

module.exports = router;
