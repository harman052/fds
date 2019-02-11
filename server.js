const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getMockData", (req, res, next) => {
  fs.readFile("./data/parcelMockData.json", function(err, mockData) {
    if (err) {
      next(err);
    } else {
      res.send({ data: JSON.parse(mockData) });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
