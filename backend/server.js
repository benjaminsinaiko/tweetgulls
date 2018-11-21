require('dotenv').config();

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');

const tweets = require('./routes/tweets');

const app = express();

// Create server instance and socket connection
const server = http.createServer(app);
const io = socketio(server);

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Routes
app.use('/api/tweets', tweets);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
