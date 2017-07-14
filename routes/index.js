const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

/*router.get('/stylesheets/*', function(req,res){
	res.sendFile('/home/murray/Foundations/July/twitter-clone/public' + req.url);
})*/

module.exports = router;