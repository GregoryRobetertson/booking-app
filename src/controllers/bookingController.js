const booking = require("../models/Booking");

// @desc create a new booking
// @route Post /api/bookings
// @access private
exports.createbookings = async (req, res) => {
  try {
    const { service, date } = req.body;
    if (!service || !date) {
      res.status(400).json({ message: "Service and date is required" });
    }
    const bookings = await booking.create({
      user: req.user.id,
      service,
      date,
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc find all users bookings
// @route Get /api/my-bookings
// @access private
exports.getmybookings = async (req, res) => {
  try {
    const bookings = await bookings.find({ User: req.user.id });
    res.status(200).json({ message: "Found user bookings" });
  } catch (error) {
    console.error("Failed to find user bookings", error);
    res.status(500).json({ message: "Server Error" });
  }
};
