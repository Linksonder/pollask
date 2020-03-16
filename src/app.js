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
const Room = mongoose.model('Room');



//1. schrijf test 
//2. kijk of de test faalt
//3. Schrijf minimale codegen
//4. kijk of test slaagt
//5. Refactor
app.post('/rooms', (req, res, next) => {
    //Op de req.body zit geen property 'subject'. Wat gaat er fout?
    //req.body.subject == null :(
    new Room(req.body).save((err, room) => {
        if(err){
            console.log(err);
            res.status(401);
            res.send(err);
        }

        if(room){

        }
        
        res.send(room);
    });
})

//nodig voor websockets
let server = http.createServer(app);

server.listen(8080, () => {
    console.log('Listening on port 8080');
})

module.exports = app;