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
    { q: 'bhafc', count: 25 },
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
    'statuses/user_timeline',
    { screen_name: 'huckabeej', count: 25 },
    (error, tweets, response) => {
      if (error) console.error(error);
      res.json(tweets);
    }
  );
});

module.exports = router;
