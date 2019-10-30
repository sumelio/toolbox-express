const supertest = require("supertest");
const assert = require("assert");
const chai = require('chai');
const app = require("../index");

const expect = chai.expect;

describe("POST /", function() {
  it(" when text is valid it shoud return 'OK'", function(done) {
    supertest(app)
      .post("/")
      .send({ text: "ok" })
      .expect(200)
      .end(function (err, res) {
        expect(res.statusCode).to.equal(200); 
        expect(res.body.input).to.equal("ok");
        done();
      });
  });
  it(" when text is not valid then it shoud return status 400", function(done) {
    supertest(app)
      .post("/")
      .send({})
      .expect(400)
      .end(function(err, res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
