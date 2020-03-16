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


app.use('/rooms', require('./routes/room-routes'));
app.use('/rooms/:roomId/questions', require('./routes/question-routes'));



module.exports = app;