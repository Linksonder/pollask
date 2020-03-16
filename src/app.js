const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

let app = express();

//middleware
app.use(express.json());

//models
if(process.env.ENV == "TEST")
    mongoose.connect('mongodb://localhost:27017/pollask-test', { useNewUrlParser: true });
else
    mongoose.connect('mongodb://localhost:27017/pollask', { useNewUrlParser: true });

require('./models/room');


let roomRoutes = require('./routes/room-routes');
app.use('/rooms', roomRoutes);

//nodig voor websockets
let server = http.createServer(app);

server.listen(8080, () => {
    console.log('Listening on port 8080');
})

module.exports = app;