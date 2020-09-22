'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected5');
  socket.on('disconnect', () => console.log('Client disconnected6'));
});

setInterval(() => io.emit('time', new Date().toTimeString() + "dd" + PORT), 1000);
setInterval(() => io.emit('ppp', PORT.toString()), 1000);
