require('dotenv').config();

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

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
require('./routes/tweets')(app, io);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
