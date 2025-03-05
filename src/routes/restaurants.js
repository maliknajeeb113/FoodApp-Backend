import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the JSON file manually
const restaurantsPath = path.join(__dirname, "../data/restaurants.json");
const restaurants = JSON.parse(fs.readFileSync(restaurantsPath, "utf-8"));


const router = express.Router();

router.get("/", (req, res) => {
  res.json(restaurants);
});

export default router; // ✅ Make sure you're exporting correctly
