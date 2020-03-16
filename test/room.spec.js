
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const Room = mongoose.model('Room');


let expect = chai.expect;
let app = require('../src/app');


var roomId = mongoose.Types.ObjectId("5e6f567a4138ba25a4ca3fd0");

describe('rooms route', () => {
    
    //even kfofie halen!
    it('POST should create a new room ', (done) => {
        chai.request(app)
            .post('/rooms')
            .send({
                subject: "My first room"
             })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.subject).to.equal('My first room');

                Room.countDocuments({}, (err, result) => {
                    expect(result).to.equal(2);
                    done();
                })
            });
    });

    it('GET /:ID should get details of 1 room', (done) => {
        chai.request(app)
            .get('/rooms/' + roomId)
            .end(function (err, res) {

                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.subject).to.equal('Room A');
                done();
            });
    });
})