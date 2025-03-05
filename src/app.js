const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Import Routes
const restaurantRoutes = require("./routes/restaurants");
app.use("/api/restaurants", restaurantRoutes);

module.exports = app;