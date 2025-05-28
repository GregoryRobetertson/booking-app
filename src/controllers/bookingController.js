const Booking = require("../models/Booking");

// @desc create a new booking
// @route Post /api/bookings
// @access private
exports.createbookings = async (req, res) => {
  try {
    const { service, date } = req.body;
    if (!service || !date) {
      res.status(400).json({ message: "Service and date is required" });
    }
    const bookings = await Booking.create({
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
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ User: req.user.id });
    res.status(200).json({ message: "Found user bookings" });
  } catch (error) {
    console.error("Failed to find user bookings", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc find user bookings by id
// @route Get /api/:id
// access private
exports.getBookingsById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      res.status(404).json({ message: "Booking Not Found" });
    }
    if (booking.user.toString() !== req.user.id);
    res.status(403).json({ message: "Not Authorized" });
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error getting booking by ID", error);
    res.status(500).json({ message: "Error server" });
  }
};

// @desc cancel bookings
// @route delete /api/:id
// @access private

exports.cancelBookings = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking Not Found" });
      if (booking.user.toString() !== res.user.id);
      res
        .status(403)
        .json({ message: "Not authorized to cancel this booking" });
    }
    booking.status = "Cancelled";
    await booking.save();
  } catch (error) {
    console.error("Error cancelling booking", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
};
