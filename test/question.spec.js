process.env.ENV = "TEST";
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


let expect = chai.expect;
let app = require('../src/app');

// const Room = mongoose.model('Room');

let roomId = mongoose.Types.ObjectId("5e6f567a4138ba25a4ca3fd0");
let questionId = mongoose.Types.ObjectId("5e6f5ed968d72c4ed0397e5b");

describe('question route', () => {
    
    it('POST should create a new question in a room ', (done) => {
        chai.request(app)
            .post('/rooms/' + roomId + '/questions')
            .send({
                question: "Is this the first question?"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.question).to.equal('Is this the first question?');
                done();
            });
    });

    it('POST :questionId/votes should increate votes for a question by 1 ', (done) => {
        chai.request(app)
            .post('/rooms/' + roomId + '/questions/' + questionId + '/votes')
            .send({})
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.question).to.equal('Question B');
                expect(res.body.votes).to.equal(1);
                done();
            });
    });
});