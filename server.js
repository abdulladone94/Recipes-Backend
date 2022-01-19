require("dotenv").config();
const exprss = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = exprss();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
