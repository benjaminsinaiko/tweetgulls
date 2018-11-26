const express = require('express');
const router = express.Router();
const Twitter = require('twitter');

// Twitter API setup
const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// @route   GET api/tweets/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
  res.json({
    msg: 'Tweets test works!'
  });
});

// @route   GET api/tweets/
// @desc    Tests users route
// @access  Public
router.get('/', (req, res) => {
  twitter.get(
    'search/tweets',
    { q: '#BHAFC', count: 25 },
    (error, tweets, response) => {
      if (error) console.error(error);
      res.json(tweets);
    }
  );
});

// @route   GET api/tweets/
// @desc    Tests users route
// @access  Public
router.get('/team', (req, res) => {
  twitter.get(
    'lists/statuses',
    { slug: 'first-team', owner_screen_name: 'ChicagoSeagulls', count: 50 },
    (error, tweets, response) => {
      if (error) console.error(error);
      res.json(tweets);
    }
  );
});

module.exports = router;
