const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const server = require("../app");
//
chai.use(chaiHttp);

describe("Question", () => {
  describe("register", () => {
    it("Should return status of 200", done => {
      const data = { some: "jkkkh" };
      chai
        .request(server)
        .post("/api/v1/Questions")
        .send(data)
        .end((err, res) => {
          expect(res.status).to.deep.equal(400);
          done();
        });
    });
  });
});
