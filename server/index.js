const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http')
const throttle =require('lodash/throttle')


const socket = require('socket.io')

const app =express();
app.set('port', (process.env.PORT || 4000));
var promise = mongoose.connect('mongodb://localhost/book-club', {
  useMongoClient: true,
  /* other options */
});
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
var server = http.createServer(app).listen(app.get('port'), () =>{
  console.log(`App listen on port ${app.get('port')}`);
});

var io = socket(server)

 io.on('connection', function (socket) {
     throttle(function () {
       console.log("made connection", socket.id);

     }, 1);
         socket.on("comment", (data, id) =>{
           console.log("comment id", id);
            socket.broadcast.emit("comment", data, id)
         })

      socket.on("reconnect", function(socket){
        console.log("reconnect");
      })
      socket.on("response", (data, id, res_id) =>{
        console.log("path id", id);

        io.sockets.emit("response", data, id, res_id)
      })
      socket.on('disconnect', ()=>{
        socket.disconnect();
        console.log("disconnect", io.engine.clientsCount);
      })
  });

app.use('/api', require('./routes/api'));
app.use('/api2', require('./routes/api2'));
//init app
//build part of the react app
//uncoment this after npm build
/*app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
*/
//err
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});
