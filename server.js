var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    port  	= process.env.PORT || 3000,
    swf     = require('./swf_game.js')

server.listen(port, function(){
	console.log("Server running on port 3000...");
});

// Socket IO
var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  console.log("Client Connected");
  swf.initGame(io, socket);
});
