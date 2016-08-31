//linking my keys.js page with liri.js
var twitterKeys = ('keys.js').twitterKeys;
var fs = require = ('fs');

//command line argument.
var writeIt = process.argv;
fs.readFile("keys.js", 'utf8', function(error, data) {
	var keysOutput = data.split("");
});
//================================================================================
//Applying Switch

switch(writeIt){
case 'my-tweets':

var Twitter = require('twitter');
//This is using environment variables to keep my information safe. 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', 'count:20', function(errors, tweets, response){
	if(errors){
		console.log('err');
		console.log(JSON.Stringify(tweets);
	}

	
	console.log(response);
	console.log();
});
};



