const Twitter = require('twitter');

module.exports = (app, io) => {
  let twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  let socketConnection;
  let twitterStream;

  app.locals.searchTerm = '#BHAFC'; // Default search term twitter stream
  app.locals.showRetweets = false; // Default

  // Establish socket connection
  io.on('connection', socket => {
    socketConnection = socket;
    stream();
    socket.on('connection', () => console.log('Client connected'));
    socket.on('disconnect', () => console.log('Client disconnected'));
  });

  //Emits data with socket.io as twitter stream flows in
  const stream = () => {
    console.log(`Resuming for ${app.locals.searchTerm}`);
    twitter.stream(
      'statuses/filter',
      { track: app.locals.searchTerm },
      stream => {
        stream.on('data', tweet => {
          sendMessage(tweet);
        });

        stream.on('error', error => {
          console.log(error);
        });

        twitterStream = stream;
      }
    );
  };

  // Sets search term for stream
  app.post('/setSearchTerm', (req, ews) => {
    let term = req.body.term;
    app.locals.searchTerm = term;
    twitterStream.destroy();
    stream();
  });

  // Pause the stream
  app.post('/pause', (req, res) => {
    console.log('Pause');
    twitterStream.destroy();
  });

  // Resume stream
  app.post('/resume', (req, res) => {
    console.log('Resume');
    stream();
  });

  // Emit data from stream
  const sendMessage = msg => {
    if (msg.text.includes('RT')) {
      return;
    }
    socketConnection.emit('tweets', msg);
  };
};
