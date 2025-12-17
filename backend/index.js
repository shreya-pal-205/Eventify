// ======== IMPORTS ========
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
const app = express();




// middleware
app.use(
  cors({
    origin: "https://eventify-sxd3.onrender.com",
    credentials: true,
  })
);
app.use(express.json());




// imp routes
const authRoutes = require("./routes/authRoute");
const eventRoutes = require("./routes/eventRoute");


app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);






const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
