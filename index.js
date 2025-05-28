const express = require("express");
const app = express();

const bookingRoutes = require("./src/routes/bookingRoutes");

app.use(express.json());
app.use("/api/bookings", bookingRoutes);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
