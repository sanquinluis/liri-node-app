//===================================================================================>>
//VARIABLES USED.
//Accessing keys.js.
var keys = require('./keys.js');
//requiring twitter's npm.  
var Twitter = require('twitter');
//requiring spotify npm
var spotify = require('spotify');
//requiring request(omdB movies) npm.
var request = require('request');
//requiring file system npm.
var fs = require('fs');
//requiring inquire npm.
var inquire = require('inquirer');
// Using fs to readFile and appendFile.
	fs.readFile("keys.js", "utf8", function(error, data) {
		var dataArr = data.split(',');
	});
	// fs.appendFile("", "utf8", function(error,data){
	// });

//=========================================>>>
//command line                            |
var writeIt = process.argv.slice(2);    //|
var command = process.argv[2];          //|
	              					    //|     
   									    //|
//=========================================>>>>
//===================================================================================>>
// Creates a Prompt with questions.
inquire.prompt([
  {
  type: "list",
  message: "What would you like to do?",
  choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
  name: "pickCase"

  },
  {
  	type: "confirm",
	message: "Are you sure:",
	name: "confirm",
	default: true
  }
]).then(function(user){
  console.log(user.pickCase);
  //Twitter
//Applying Switch
switch(this.pickCase){
	case 'my-tweets':
//Twitter
//This is using environment variables to keep my information safe. 
		var client = new Twitter({
			consumer_key: process.env.TWITTER_CONSUMER_KEY,
			consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
			access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
			access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
		var client = new Twitter(keys.Twitter);
		var params = {screen_name: 'I Wrote:'};
		client.get('statuses/user_timeline', params, function(errors, tweets, response){
			//If an error never occurred 
			if(!errors){
				console.log("err");
					}
				if(this.confirm){
					//for loop to grab max of 20 tweet.
					for (var i = 0; i < 20; i++){
						console.log("I Wrote: " + tweets[i].text);
						console.log('_____________________________');
						// console.log("Are you there Twits?");
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
});









