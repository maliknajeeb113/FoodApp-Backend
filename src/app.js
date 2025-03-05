// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Import Routes
// const restaurantRoutes = require("./routes/restaurants");
// app.use("/api/restaurants", restaurantRoutes);

// module.exports = app;
import express from "express";
import restaurantRoutes from "./routes/restaurants.js";

const app = express();

app.use(express.json()); // Enable JSON parsing
app.use("/api/restaurants", restaurantRoutes); // Define API routes

export default app;
