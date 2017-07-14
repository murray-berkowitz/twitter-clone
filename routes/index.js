const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.post('/tweets', function(req,res,next){
	console.log(bodyParser(req.body));
	next();
})

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm:true} );
});

router.get('/users/:name', function(req,res){
	var name = req.params.name;
	var list = tweetBank.find({name:name});
	console.log(tweetBank.list());
	console.log(list);
	res.render('index',{tweets:list});
})


router.get('/tweets/:id', function(req,res){
	var id = Number(req.params.id);
	var list = tweetBank.find({id:id});
	res.render('index', {tweets:list});
})

/*router.get('/stylesheets/*', function(req,res){
	res.sendFile('/home/murray/Foundations/July/twitter-clone/public' + req.url);
})*/

module.exports = router;