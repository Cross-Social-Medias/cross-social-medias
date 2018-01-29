const express = require('express');
const instagramApi = require('instagram-node').instagram();
require('dotenv').config();

const app = express();

instagramApi.use({ client_id:  process.env.client_id, client_secret:  process.env.client_secret });

const redirect_uri = 'http://f28890db.ngrok.io/handleauth';

exports.authorize_user = function(req, res) {
  res.redirect(instagramApi.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  instagramApi.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};


// This is where you would initially send users to authorize
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI
app.get('/handleauth', exports.handleauth);

module.exports = {
   path: '/instagram_entry_point',
   handler: app
}