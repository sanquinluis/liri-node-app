//===================================================================================>>
//VARIABLES USED.
//Accessing keys.js.
var keys = require('./keys.js');
// console.log(keys)
//requiring twitter's npm.  
var Twitter = require('twitter');
console.log(Twitter)
//requiring spotify npm
var spotify = require('spotify');
// console.log(spotify)
//requiring request(omdB movies) npm.
var request = require('request');
// console.log(request)
//requiring file system npm.
var fs = require('fs');
// console.log(fs)
//requiring inquire npm.
var inquire = require('inquirer');
// console.log(inquire)
// Using fs to readFile and appendFile.
	fs.readFile("keys.js", "utf8", function(error, data) {
		var dataArr = data.split(',');
	});
	// fs.appendFile("", "utf8", function(error,data){
	// });

//=========================================>>>
//command line                            |  
var command = process.argv[2];          //|
	              					    //|     
   									    //|
//=========================================>>>>
//===================================================================================>>

//Applying Switch
switch(command){
	case 'my-tweets':
	var client = new Twitter({
  		consumer_key: process.env.TWITTER_CONSUMER_KEY,
  		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
//Twitter
		var client = new Twitter(keys.Twitterkeys);
		var params = {screen_name: 'I Wrote:'};
		client.get('statuses/user_timeline', params, function(errors, tweets, response){
			//If an error never occurred 
			if(!errors){
					//for loop to grab max of 20 tweet.
					for (var i = 0; i < 20; i++){
						console.log("I Wrote: " + tweets[i].text + '\n');
						console.log('_____________________________');
						console.log(tweets);
						
		}
	}

});
		break;
//===================================================================================>>
//Spotify: 
	case 'spotify-this-song':
	
		break;
	case 'movie-this':
	
		break;
	case '':

		break;

};









