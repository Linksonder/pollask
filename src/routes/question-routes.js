const express = require('express');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');

let router = express.Router();

router.post('/', (req, res, next) => {
    Room.findOne({ id: req.params.roomId })
        .exec( (err, room) => {
            //give a question an ID
            let question = req.body;
            question._id = mongoose.Types.ObjectId();
            room.questions.push(question);

            room.save((err, room) => {

                if(err){
                    res.status(401);
                    return res.send(err);
                }

                res.send(question);
            })
        })
});

router.post('/:questionId/votes', (req, res, next) => {
    Room.findOne({ id: req.params.roomId })
        .exec( (err, room) => {
            let question = null;
            room.questions.forEach(q => {
                if(q._id == req.params.questionId)
                {
                    q.votes++;
                    question = q;
                }
            })
        
            room.save((err, room) => {

                if(err){
                    res.status(401);
                    return res.send(err);
                }

                res.send(question);
            })
        })
});

module.exports = router;