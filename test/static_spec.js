const request = require('request');
const server = require('../src/server');
const base = 'http://localhost:3000';
const chai = require('chai');

describe('routes : static', () => {

    describe('GET /', (done) => {
        it ('should return status code 200', (done) => {
            request.get(base, (err, res, body) => {
                chai.expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })
})