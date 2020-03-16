const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let app = require('../src/app');


//coverage
//draaien
//assert
//request naar de api

describe('rooms route', () => {
    it('POST should create a new room ', () => {
        chai.request(app)
            .post('/rooms')
            .send({
                subject: "My first room"
             })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(req.body.subject).to.equal('My first room');
            });
    });
    it('GET /:ID should get details of 1 room');
})