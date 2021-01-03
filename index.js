const express = require("express");
const port = 8000;

const app = express();

const db = require("./config/mongoose");

//response from server
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

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
