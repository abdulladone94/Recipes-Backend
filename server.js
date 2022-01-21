require("dotenv").config();
const exprss = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = exprss();

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection Success!");
});

const recipeRouter = require("./routes/recipes");

app.use("/recipe", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
