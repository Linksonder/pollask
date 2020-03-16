process.env.ENV = "TEST";
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


let expect = chai.expect;
let app = require('../src/app');

const Room = mongoose.model('Room');


//coverage
//draaien
//assert
//request naar de api

describe('rooms route', () => {


    before((done) => {

        Room.deleteMany({}, (err) => {
            done();
        })

    });
    

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
                    expect(result).to.equal(1);
                    done();
                })
            });
    });
    it('GET /:ID should get details of 1 room');
})