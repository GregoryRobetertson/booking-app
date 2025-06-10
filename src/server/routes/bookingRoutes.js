const express = require("express");
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  getBookingsById,
  cancelBookings,
} = require("../controllers/bookingController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createBooking);
router.get("/my-bookings", authenticateUser, async (req, res) => {
  try {
    console.log("Decoded user:", req.user); // make sure this prints
    const bookings = await Booking.find({ userId: req.user.uid });
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Something went wrong on the server." });
  }
});
router.get("/:id", auth, getBookingsById);
router.delete("/:id", auth, cancelBookings);

module.exports = router;
