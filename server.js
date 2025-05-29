const express = require("express");
const app = express();

const bookingRoutes = require("./src/routes/bookingRoutes");

app.use(express.json());
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Running on port ${PORT}`);
});
