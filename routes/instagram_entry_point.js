const express = require('express');
const instagramApi = require('instagram-node').instagram();
require('dotenv').config();

const app = express();

instagramApi.use({
  client_id:  process.env.client_id,
  client_secret:  process.env.client_secret,
  access_token: process.env.access_token
});


const redirect_uri = 'http://localhost:3000/instagram_entry_point/handleauth';

// This is where you would initially send users to authorize
app.get('/authorize_user', (req, res) => {
  res.redirect(instagramApi.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
});

// This is your redirect URI
app.get('/handleauth', (req, res) => {
  instagramApi.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
});

app.get("/", (req, res) => {
  instagramApi.user_search("anthonylastella", (err, result, remaining, limit) =>  {
    res.send(result);
  });
});


module.exports = {
   path: '/instagram_entry_point',
   handler: app
}