//===================================================================================>>
//VARIABLES USED.
//Accessing keys.js.
var keys = require('./keys.js');
//Requiring twitter's npm.  
var Twitter = require('twitter');
//Requiring spotify npm
var spotify = require('spotify');
//Requiring request(omdB movies) npm.
var request = require('request');
//Requiring file system npm.
var fs = require('fs');
//Requiring inquire npm.
var inquire = require('inquirer');
// console.log(inquire)

	// // fs.appendFile("", "utf8", function(error,data){
	// });

//=========================================>>>
//command line                            |  
var command = process.argv[2];  		//|
// console.log(command); 			    //|							
var results = process.argv[3];    	    //|
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
//From spotify npm site.
	spotify.search({ type: 'track', query: results }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else{
    	for(var i = 0; i < 10; i++){
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
	var movieSearch = 'http://www.omdbapi.com/?t=' + results + '&y=&plot=short&tomatoes=true&r=json';
	var MrNoBody = 'http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&tomatoes=true&r=json';

	if(results === undefined){
		request(MrNoBody,function (error, response, body) {
       		if (!error && response.statusCode == 200) {
              	//Title of the movie
              	console.log("The movie: " + JSON.parse(body)["Title"]);
              	//Year created
              	console.log("Year created: " + JSON.parse(body)["Year"]);
              	//IMDB rating
              	console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
              	//Country origin
              	console.log("Country of Origin: " + JSON.parse(body)["Country"]);
              	//Language origin
              	console.log("Language of the movie: " + JSON.parse(body)["Language"]);
              	//Plot
              	console.log("The Plot: " + JSON.parse(body)["Plot"]);
              	//Actors in this movie
              	console.log("Actors: " + JSON.parse(body)["Actors"]);
              	//Rotten Tomatoes rating
              	console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
              	//Source of Rotten Tomatoes
              	console.log("Rotten Tomatoes source: " + JSON.parse(body)["tomatoURL"]);
            } 
	});
		
	} else {
        request(movieSearch, function (error, response, body) {	
      		if (!error && response.statusCode == 200) {
              	//Title of the movie
              	console.log("The movie: " + JSON.parse(body)["Title"]);
              	//Year created
              	console.log("Year created: " + JSON.parse(body)["Year"]);
            	//IMDB rating
              	console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
              	//Country origin
              	console.log("Country of Origin: " + JSON.parse(body)["Country"]);
              	//Language origin
              	console.log("Language of the movie: " + JSON.parse(body)["Language"]);
              	//Plot
              	console.log("The Plot: " + JSON.parse(body)["Plot"]);
              	//Actors in this movie
              	console.log("Actors: " + JSON.parse(body)["Actors"]);
              	//Rotten Tomatoes rating
              	console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
              //Source of Rotten Tomatoes
              	console.log("Rotten Tomatoes source: " + JSON.parse(body)["tomatoURL"]);
            	};	
      		});
			
        };

	
	
		break;
//===================================================================================>>
// do-what-it-says
	case 'do-what-it-says':
			console.log("Dooo");
	
	//fs files is reading random.text
	fs.readFile("random.text", "utf8", function(error, data) {
		function dataA(){

		}
		//splits the data received.
		var dataA = data.split(',');
		//array data.
			parameOne = dataA[0];
			parameTwo = dataA[1];

		if(error){
			console.log(error);
		}else{
			console.log(parametorOne);
		}
	});
	return;
		break;
//===================================================================================>>
//default
	default: 
			console.log('Please write: my-tweets, spotify-this-song, movie-this or do-what-it-says.Thanks!');

};













