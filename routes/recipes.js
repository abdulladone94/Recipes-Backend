const router = require("express").Router();
const Recipe = require("../models/recipe");

router.route("/add").post((req, res) => {
  const { recipeName, ingredents, description } = req.body;

  const newRecipe = new Recipe({
    recipeName,
    ingredents,
    description,
  });
  newRecipe
    .save()
    .then(() => {
      res.status(200).send({ status: "Recipe successfully Added to DB" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
