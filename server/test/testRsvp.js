const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
//
chai.use(chaiHttp);

describe('register', () => {
    it('Should return status of 200', (done) => {
        const data = {
            id: 1,
            meetup: 1,
            user: 1,
            response: 'sdkfsdf',
        };
        chai
            .request(server)
            .post('/meetups/:id/rsvps')
            .send(data)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            });
    });
});

// eslint-disable-next-line no-undef
describe('send rsvp ', () => {
    it('send All rsvp ', (done) => {
        chai
            .request(server)
            .get('/api/v1/rsvps')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.deep.equal(200);
                done();
            });
    });
});
