import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/restaurants.js";

const app = express();

// ✅ List of allowed origins
const allowedOrigins = [
    "http://localhost:5173",
    "https://your-frontend.vercel.app"  // Add your deployed frontend URL here
];

// ✅ Dynamic CORS configuration
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
};

app.use(cors(corsOptions)); // ✅ Use dynamic CORS

app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);

export default app;
