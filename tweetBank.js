const _ = require('lodash');

var tweetArray = [];

function add(name, content, picture){
	tweetArray.push({'name':name, 'content':content, 'picture':picture, 'id':tweetArray.length})
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
	return randomElement(firstNames) + ' ' + randomElement(lastNames);
}

const image = function(){
	var images = ['https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/','http://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg'];
	return randomElement(images);	
}

const testTweet = function() {
	const adjectives = ['awesome', 'terrible', 'funny', 'insufferable'];
	return 'UNIQLO is ' + randomElement(adjectives) + '!'; 
}

for(var i = 0; i < 10; i++){
	module.exports.add(testName(), testTweet(), image());
}

//console.log(tweetArray);
