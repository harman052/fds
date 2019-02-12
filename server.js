const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const config = require("./config.js");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/getMockData", (req, res, next) => {
  fs.readFile("./data/parcelMockData.json", function(err, mockData) {
    if (err) {
      next(err);
    } else {
      res.send({ data: JSON.parse(mockData) });
    }
  });
});

// Getting users data as JSON
let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));

const callback = (res, statusSode, message, token = {}) => {
  res.send({
    statusSode,
    message,
    token
  });
};

app.post("/api/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("server: ", username, password);
  if (typeof username !== "string" || typeof password !== "string") {
    callback(res, 500, "Invalid username or password");
  } else {
    let userExists = users.find(
      user => user.username === username && user.password === password
    );
    if (userExists) {
      let token = jwt.sign({ username }, config.secret, {
        expiresIn: "24h"
      });
      callback(res, 200, "Login successful", token);
    } else {
      callback(res, 500, "Invalid username or password");
    }
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
