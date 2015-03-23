var express = require('express');
app = express();
//the following tells express to use ejs to render views
// app.set("view engine", "ejs");
// var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nicknames = [];
console.log(nicknames);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});
// io.on('connection', function(socket){
//    socket.on('click', function(move){
//     io.emit('click', move);
//    });
// });


io.on('connection', function(socket){
  console.log('connected');
  

  socket.on('turn played', function(move){
    io.emit('turn played', move);
  });
  socket.on('winner', function(data){
    io.emit('game over', { "winner": data });
  });

  socket.on('new user', function(data, callback){
    if (nicknames.indexOf(data) != -1){
      callback(false);
    } else {
      callback(true);
      socket.nickname = data;
      nicknames.push(socket.nickname);
      io.emit('usernames', nicknames);
    }
  });
  

  socket.on('chat message', function(data){
    console.log('message: ' + data);
  });
  socket.on('chat message', function(data){
    io.emit('chat message', {msg: data, nick: socket.nickname});
  });

  function updateNicknames() {
    io.emit('usernames', nicknames);
  }
  socket.on('disconnect', function(data){
    console.log('disconnected');
    if(!socket.nickname) return;
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    updateNicknames();
  });
});


http.listen(3000, function(){
console.log('listening on *:3000');
});