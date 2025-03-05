import express from "express";
import restaurantRoutes from "./routes/restaurants.js";

const app = express();

app.use(express.json()); 
app.use("/api/restaurants", restaurantRoutes); // ✅ Correct usage

export default app;
