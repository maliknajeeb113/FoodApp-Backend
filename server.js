import app from "./src/app.js"; // ✅ Ensure this correctly imports the default export

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
