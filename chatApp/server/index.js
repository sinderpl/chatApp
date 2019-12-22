// app.js
const express = require('express');
const io = require('socket.io')(80);
const port = 3000;

// Create Express app
const app = express();

// A sample route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the Express server
app.listen(port, () => console.log('Server running on port ', port));