// import chaiAsPromised from 'chai-as-promised';

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const should = require('should');
const server = require('../app');

//
chai.use(chaiHttp);
chai.should();

describe('get all meetup ', () => {
    it('/GET /meetups', (done) => {
        chai
            .request(server)
            .get('/api/v1/meetup')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('createdOn');
                res.body.data[0].should.have.property('topic');
                res.body.data[0].should.have.property('location');
                res.body.data[0].should.have.property('happeningOn');
                res.body.data[0].should.have.property('tags');
                done();
            });
    });
});
/* describe('get a specific meetup record', () => {
    it('/GET /meetups/<meetup-id>', (done) => {
        chai
            .request(server)
            .get('/api/v1/meetup/1')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                res.body.data[0].should.have.property('id').eql(1);
                res.body.data[0].should.have.property('createdOn').eql('22/12/2018');
                res.body.data[0].should.have.property('topic').eql('Andela bootcamp');
                res.body.data[0].should.have.property('location').eql('DRC');
                res.body.data[0].should.have.property('happeningOn').eql('2019-01-25');
                res.body.data[0].should.have.property('tags').eql('Andela HomeStudy');
                // res.body.data[0].tags.should.be.a('array');
                done();
            });
    });
});*/
