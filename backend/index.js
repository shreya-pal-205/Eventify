// ======== IMPORTS ========
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// ======== CONFIG ========
dotenv.config();

// ======== APP INIT ========
const app = express();

// ======== MIDDLEWARE ========
app.use(cors());
app.use(express.json());

// ======== ROUTE IMPORTS ========
const authRoutes = require("./routes/authRoute");
const eventRoutes = require("./routes/eventRoute");

// ======== ROUTES ========
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// ======== DATABASE CONNECTION ========
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ======== SERVER START ========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
