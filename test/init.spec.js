
process.env.ENV = "TEST";
const mongoose = require('mongoose');

let app = require('../src/app');
const Room = mongoose.model('Room');

let roomId = mongoose.Types.ObjectId("5e6f567a4138ba25a4ca3fd0");
let questionId = mongoose.Types.ObjectId("5e6f5ed968d72c4ed0397e5b");


before((done) => {

    Room.deleteMany({}, (err) => {
        new Room({
            _id: roomId,
            subject: "Room A",
            questions: [
                {
                    _id: questionId,
                    question: "Question B",
                    votes: 0
                }
            ]
        }).save((err) => {
            done();
        })
    })

});
