const express = require('express');
const instagramApi = require('instagram-node').instagram();
require('dotenv').config();

const app = express();

instagramApi.use({ client_id:  process.env.client_id, client_secret:  process.env.client_secret });

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

app.get("/user_search", (req, res) => {
  instagramApi.user_search(req.query.username, [{count: 1}], (err, users, remaining, limit) => {
    //TODO
  });
});

app.get("/", (req, res) => {
  instagramApi.user('516372258', (err, result, remaining, limit) =>  {
    res.send(err);
  });
});


module.exports = {
   path: '/instagram_entry_point',
   handler: app
}