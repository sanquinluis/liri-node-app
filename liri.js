//===================================================================================>>
//VARIABLES USED.
//Accessing keys.js.
var keys = require('./keys.js');
// console.log(keys);
//requiring twitter's npm.  
var Twitter = require('twitter');
// console.log(Twitter)
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
	fs.readFile("random.text", "utf8", function(error, data) {
		var dataArr = data.split(',');
		// console.log(dataArr);
	});
	// fs.appendFile("", "utf8", function(error,data){
	// });

//=========================================>>>
//command line                            |  
var command = process.argv[2];  		//|
// console.log(command); 			    //|
var warning ; 							//| 
var songs = process.argv[3];    	//|
	              					    //|     
   									    //|
//=========================================>>>>
//===================================================================================>>

//Applying Switch
switch(command){
//Twitter
	case 'my-tweets':
	console.log("where are my tweets");

		var client = new Twitter(keys.twitterKeys);
		// console.log(client);
		var params = {screen_name: 'Lui_SantanaQ'};
		client.get('statuses/user_timeline', function(error, tweets, response){
    		if(error) {
      			console.log(error);
      		
    	}
    			console.log("My last 20 tweets:")
    		for (i = 0; i < 20; i++){
      			console.log("My last Tweetes are: " + tweets[i].text);
			
		}
	});
		break;
//===================================================================================>>
//Spotify: 
	case 'spotify-this-song':
	console.log("where is my music?");

	spotify.search({ type: 'track', query: songs }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
	
		break;
//===================================================================================>>		
//IMDB Movie
	case 'movie-this':
	console.log("where is my movie");
	
		break;
//===================================================================================>>
// do-what-it-says
	case 'do-what-it-says':
	console.log("Dooo");

		break;
//===================================================================================>>
//default
	default: 
	warning = 'Please write: my-tweets, spotify-this-song, movie-this or do-what-it-says';

};













