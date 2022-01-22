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

router.route("/").get((req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put((req, res) => {
  const reciceId = req.params.id;
  const { recipeName, ingredents, description } = req.body;

  const updateRecipe = { recipeName, ingredents, description };

  Recipe.findByIdAndUpdate(reciceId, updateRecipe)
    .then(() => {
      res.status(200).send({ status: "Recipe Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating recipe", err: err.message });
    });
});

router.route("/delete/:id").delete((req, res) => {
  const recipeid = req.params.id;

  Recipe.findByIdAndDelete(recipeid)
    .then(() => {
      res.status(200).send({ status: "Recipe Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with delete recipe", err: err.message });
    });
});

module.exports = router;
