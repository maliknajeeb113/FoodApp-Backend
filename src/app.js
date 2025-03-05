import express from "express";
import cors from "cors"; // ✅ Import CORS
import restaurantRoutes from "./routes/restaurants.js";

const app = express();

// ✅ Allow frontend on localhost:5137
app.use(cors({
    origin: "http://localhost:5137", // Allow requests from your frontend
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);

export default app;
