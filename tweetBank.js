const _ = require('lodash');

var tweetArray = [];

function add(name, content){
	tweetArray.push({'name':name, 'content':content})
}

function list() {
	return _.cloneDeep(tweetArray);
}

function find(properties) {
	return _.cloneDeep(_.filter(tweetArray,properties));
}

module.exports = {
	add:add,
	list:list,
	find:find
}

const randomElement = function(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}

const testName = function(){
	const firstNames = ['Joe', 'Jim', 'Jess', 'Jack'];
	const lastNames = ['Jackson', 'Johnson'];
	return firstNames[0] + ' ' + lastNames[0];
}

const testTweet = function() {
	const adjectives = ['awesome', 'terrible', 'funny', 'insufferable'];
	return 'UNIQLO is ' + randomElement(adjectives) + '!'; 
}

for(var i = 0; i < 10; i++){
	module.exports.add(testName(), testTweet());
}

//console.log(tweetArray);

console.log(module.exports.find('name'));