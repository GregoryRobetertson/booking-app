const express = require("express");
const router = express.Router();
const {
  createbookings,
  getMyBookings,
  getBookingsById,
  cancelBookings,
} = require("@/controllers/bookingController");

router.post("/", auth, createbookings);
router.get("/my-bookings", auth, getMyBookings);
router.get("/:id", auth, getBookingsById);
router.delete("/:id", auth, cancelBookings);

module.exports = router;
