const express = require("express");
const Product = require("./../models/product.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({}, { name: 1, price: 1 });
    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", (req, res, next) => {
  const product = new Product({ name: req.body.name, price: req.body.price });
  product
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err.message));
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      res.status(404).send("Not Found");
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).send("Not Found");
    } else {
      res.send(product);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  const options = { new: true };
  try {
    const product = await Product.findByIdAndUpdate(id, updates, options);
    if (!product) {
      res.status(404).send("Not Found");
    } else {
      res.send(product);
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
