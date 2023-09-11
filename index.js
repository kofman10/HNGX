const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const personRoute = require("./routes/person");

dotenv.config();

app.use(express.json());

app.use("/api", personRoute);

const connect = mongoose.connect(process.env.MONGO_URL);

connect
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 8080, () => {
  console.log("server running");
});

module.exports = app