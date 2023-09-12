const assert = require("assert");
const request = require("supertest");
const app = require("./index"); 

describe("API CRUD Operations", () => {
  let createdPersonId;

  //   Create a new person and store the ID for later use
  it("should create a new person", async () => {
    const res = await request(app)
      .post("/api")
      .send({
        name: "John Doe",
        details: "John is cool",
      })
      .expect(201);
    createdPersonId = res.body._id;
  });

  //   Fetch the newly created person
  it("should fetch details of the created person", async () => {
    const res = await request(app).get(`/api/${createdPersonId}`).expect(201);
    assert.equal(res.body._id, createdPersonId);
  });

  //   Update the details of the created person
  it("should update details of the created person", async () => {
    const res = await request(app)
      .put(`/api/${createdPersonId}`)
      .send({
        name: "Updated Name",
        details: "Updated details",
      })
      .expect(201);
    assert.equal(res.body.name, "Updated Name");
    assert.equal(res.body.details, "Updated details");
  });

  //   Delete the created person
  it("should delete the created person", async () => {
    const res = await request(app)
      .delete(`/api/${createdPersonId}`)
      .expect(201);
    assert.equal(res.body._id, createdPersonId);
  });
});
