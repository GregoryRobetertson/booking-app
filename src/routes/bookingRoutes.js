const express = require("express");
const router = express.Router();

const createBookings = (req, res) => {
  res.send("Created bookings");
};

const getMyBookings = (req, res) => {
  res.send("Get my bookings");
};

const getBookingsById = (req, res) => {
  res.send("Get bookings by id");
};

const cancelBookings = (req, res) => {
  res.send("Cancel my bookings");
};
router.post("/", createBookings);
router.get("/my-bookings", getMyBookings);
router.get("/:id", getBookingsById);
router.delete("/:id", cancelBookings);
module.exports = router;
