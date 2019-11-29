/**
 * References:
 * - https://dev.to/lauragift21/setup-continuous-integration-with-travis-ci-in-your-nodejs-app-26i2 
 * - https://medium.com/@connecttokc/behaviour-driven-testing-in-node-js-using-mocha-chai-5e0c85258bbe
 * - https://www.chaijs.com/plugins/chai-http/
 */
'use strict'

/** BDD - Testing and Travis CI */
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const api = require('./app');

/** Test the getAllUsers endpoint of the microservices API */
describe('GIVEN - MicroservicesAPI - GET /api/sd2019bExam1/microservices/:microserviceId', () => {
    it(`WHEN a client request to the information associated to one microserviceId
     \n THEN should respond with the same microserviceId and its information`, (done) => {
        let microserviceId = '78sdfs78ss-54215s-kss4wq12';
        chai.request(api).get(`/api/sd2019bExam1/microservices/${microserviceId}`).end(
            (err, res) => {
                should.not.exist(err);
                res.status.should.equal(200);
                res.body.should.include.keys(
                    'status', 'message', 'webServerLocation'
                );
                res.body.message.should.equal(
                    'Microservices API works for microserviceId: 78sdfs78ss-54215s-kss4wq12'
                );
                done();
            }
        );
    });
});

