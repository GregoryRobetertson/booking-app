const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./src/server/routes/auth");
const bookingRoutes = require("./src/server/routes/bookingRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log("Server running"));
  })
  .catch((err) => console.error(err));
