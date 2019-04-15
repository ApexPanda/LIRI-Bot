# LIRI-Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Below is the list of commands that can be typed into your command line to have it return the requested information:

node liri.js spotify-this-song "input song" 
    This will return song information from spotify

node liri.js concert-this "input concert"
    This will return concert information from the Bands in Town API

node liri.js movie-this "input movie"
    This will return movie information from OMDB

node liri.js do-what-it-says
    This will return a command that is stored in the text file 