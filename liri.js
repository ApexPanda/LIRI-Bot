require("dotenv").config();

var Spotify = require('node-spotify-api');
const keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
var fs = require('fs');


var spotify = new Spotify(keys.spotify);



const command = process.argv[2];
const secondCommand = process.argv[3];

switch (command) {
    case ('spotify-this-song'):
        if(secondCommand){
            spotifyThisSong(secondCommand);
         } else{
            spotifyThisSong("I Want Candy");
         }
	break;
	
	case('concert-this'):
	if(secondCommand){
		bandInTown(secondCommand);
	 } else{
		bandInTown("I Want Candy");
	 }
break;
		 
    case ('movie-this'):
        if(secondCommand){
            omdb(secondCommand);
        } else{
            omdb("The Graduate");
        }
    break;
    case ('do-what-it-says'):
         doThing();
    break;
    default:
        console.log('Try again');
};


function spotifyThisSong(song){
    spotify.search({ type: 'track', query: song, limit: 1}, function(error, data){
        if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
                      //artist
            console.log("Artist: " + songData.artists[0].name);
                      //song name
            console.log("Song: " + songData.name);
                      //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
                      //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            } 
        } else {
        console.log('Error occurred.');
        }
    });
	}
	
	function bandInTown() {
		var queryUrl =
		  "https://rest.bandsintown.com/artists/" +
		  name +
		  "/events?app_id=codingbootcamp";
		console.log(queryUrl);
		request(queryUrl, function(error, response, body) {
		  // If the request is successful
		  var pbody = JSON.parse(body);
		  if (!error && response.statusCode === 200) {
			pbody.forEach(function(element) {
			  console.log("Venue name - " + element.venue.name);
			  console.log(
				"Venue Location - " +
				  element.venue.city +
				  " , " +
				  element.venue.region +
				  "  - " +
				  element.venue.country
			  );
			  console.log("Date - " + moment(element.datetime).format("MM/DD/YYYY"));
			});
		  }
		});
	  }

    function omdb(movie){
        var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=47e83ab9&plot=short&tomatoes=true';
      
        request(omdbURL, function (error, response, body){
          if(!error && response.statusCode == 200){
            var body = JSON.parse(body);
      
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);
            
          } else{
            console.log('Error occurred.')
          }
          if(movie === "Into the Woods"){
            console.log("-----------------------");
            console.log("If you haven't watched 'Into the Woods,' then you should: https://www.imdb.com/title/tt2180411/");
            console.log("It's on Netflix!");

          }
        });
      
	  }
	  
      function doThing(){
        fs.readFile('random.txt', "utf8", function(error, data){
          var txt = data.split(',');
      
          spotifyThisSong(txt[1]);
        });
      }