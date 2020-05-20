const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/", (req, res) => {
  axios
    .get(req.body.endpoint, {
      headers: {
        Authorization: `bearer ${res.body.key}`,
      },
    })
    .then(function (response) {
      res.send(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
