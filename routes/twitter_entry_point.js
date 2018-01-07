const express = require('express');
const Twitter = require('twitter');
require('dotenv').config();

const app = express();
const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

app.get('/', (req, res) => {
  client.get('statuses/user_timeline', { screen_name: req.query.username, count: 100 }, (error, tweets, response) => {
    if (!error) {
      res.status(200).json({ title: req.query.username, tweets: tweets });
    }
    else {
      res.status(500).json({ error: error });
    }
  });
})


module.exports = {
   path: '/twitter_entry_point',
   handler: app
}