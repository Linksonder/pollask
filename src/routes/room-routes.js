const express = require('express');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');

let router = express.Router();

router.post('/', (req, res, next) => {
    //Op de req.body zit geen property 'subject'. Wat gaat er fout?
    //req.body.subject == null :(
    new Room(req.body).save((err, room) => {
        if(err){
            res.status(401);
            res.send(err);
        }
        res.send(room);
    });

})

router.get('/:id', (req, res, next) => {
    Room.findOne({ _id: req.params.id})
        .exec( (err, room) => {
            if(err){
                res.status(401);
                res.send(err);
            }
            res.send(room);
        });
})

module.exports = router;


