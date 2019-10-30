const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

const SERVER_PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.post("/", (req, res) => {
  const { text } = req.body;
  if (!text || text === undefined) {
    res.sendStatus(400);
  } else {
    res.json({ input: text });
  }
});
module.exports = app;

app.listen(SERVER_PORT, function () {
  console.log(`listening on port ${SERVER_PORT}`);
});

