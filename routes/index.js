module.exports = function(io){
	const express = require('express');
	const router = express.Router();
	const fs = require('fs');
	const path = require('path');
	const bodyParser = require('body-parser');
	const jsonParser = bodyParser.json();
	const urlencodedParser = bodyParser.urlencoded({extended:false});
	// could use one line instead: const router = require('express').Router();
	const tweetBank = require('../tweetBank');

	router.use(express.static('public'));

	router.post('/tweets',urlencodedParser,function(req,res,next){
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name,text);
		//io.sockets.emit('newTweet', { /* tweet info */ });
		res.redirect('/');
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
		res.render('index',{tweets:list, showForm:true, name:name});
	})


	router.get('/tweets/:id', function(req,res){
		var id = Number(req.params.id);
		var list = tweetBank.find({id:id});
		res.render('index', {tweets:list});
	})

	/*router.get('/stylesheets/*', function(req,res){
		res.sendFile('/home/murray/Foundations/July/twitter-clone/public' + req.url);
	})*/

	return router
}