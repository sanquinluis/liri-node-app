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
// console.log(inquire)

	// // fs.appendFile("", "utf8", function(error,data){
	// });

//=========================================>>>
//command line                            |  
var command = process.argv[2];  		//|
// console.log(command); 			    //|
var warning ; 							//| 
var songs = process.argv[3];    	    //|
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
    			//A for loop that will grab 20 tweets.
    		for (i = 0; i < 20; i++){
      			console.log("My last Tweetes are: " + tweets[i].text);
			
		}
	});
		break;
//===================================================================================>>
//Spotify: 
	case 'spotify-this-song':
	console.log("where is my music?");
//from spotify npm site.
	spotify.search({ type: 'track', query: songs }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else{
    	for(var i = 0; i < 15; i++){
    		var musicfound = data.tracks.items[i];
    		// console.log(musicfound);
    		//The name of the Artist
    		console.log("The Artist is: " + musicfound.artists[0].name);
    		//The name of the song
    		console.log("The Song is: " + musicfound.name);
    		//The url of the song
    		console.log("The source is: " + musicfound.external_urls.spotify);
    		//The name of the album
    		console.log("The album is " + musicfound.album.name);

    	}
    }	
    
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
// 	if(){

// 	}else{
// 	//Using fs to readFile.
// 	fs.readFile("random.text", "utf8", function(error, data) {
// 		var dataArr = data.split(',');
// 	 	console.log(dataArr);
// 	});
// };

		break;
//===================================================================================>>
//default
	default: 
	console.log('Please write: my-tweets, spotify-this-song, movie-this or do-what-it-says.Thanks!');

};













