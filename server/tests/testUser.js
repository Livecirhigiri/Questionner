const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const server = require("../app");
//
chai.use(chaiHttp);

describe("User", () => {
  describe("register", () => {
    it("Should return status of 200", done => {
      const data = { some: "jkkkh" };
      chai
        .request(server)
        .post("/meetups/:id/rsvps")
        .send(data)
        .end((err, res) => {
          expect(res.status).to.deep.equal(400);
          done();
        });
    });
  });
});

// eslint-disable-next-line no-undef
describe("send rsvp ", () => {
  it("send All rsvp ", done => {
    chai
      .request(server)
      .get("/api/v1/rsvps")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.deep.equal(200);
        done();
      });
  });
});
