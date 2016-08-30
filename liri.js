//pass procces.argv when we type a word
//download the json twitter/Spotify/OMDB package 
//look for modules
//Require is acquiring the twitter keys 
var Twitter = require('twitter');


//This is using environment variables to keep my information safe. 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var theTwitter = process.argv[2];

client.get('search/tweets', {q: 'keys.js'}, function(errors, tweets, response){
	if(errors){
		console.log('err');
	}

	console.log(JSON.Stringify(tweets);
	console.log(response);
});




