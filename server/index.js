const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const port = 3034;

const apiRouter = require("./api");

// middleware
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
