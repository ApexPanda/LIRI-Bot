console.log('this is loaded');

var env = require("dotenv").config();


exports.Spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  };

exports.omdb = {
  api_key: process.env.OMDB_API_KEY
}
