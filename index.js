const express = require("express");
const port = 8000;

const app = express();

const db = require("./config/mongoose");

const mongoose = require("mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport_jwt_strategy");

//Middlewares
app.use(express.urlencoded());

app.use("/", require("./routes"));

//listening to server

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
    return;
  }
  console.log("server is up and running on port:", port);
  return;
});
