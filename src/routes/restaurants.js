// const express = require("express");
// const router = express.Router();
// const restaurants = require("../data/restaurants.json");

// router.get("/", (req, res) => {
//   res.json(restaurants);
// });

// module.exports = router;

import express from "express";
import restaurants from "../data/restaurants.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(restaurants);
});

export default router;
