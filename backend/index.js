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






// mongodb connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


  
//server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
