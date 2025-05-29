const Booking = require("../models/Booking");

// @desc create a new booking
// @route Post /api/bookings
// @access private
exports.createBookings = async (req, res) => {
  try {
    const { service, date } = req.body;
    if (!service || !date) {
      return res.status(400).json({ message: "Service and date are required" }); // Changed "is" to "are"
    }
    const booking = await Booking.create({
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
    const bookings = await Booking.find({ user: req.user.id }); // Corrected field name to 'user'
    res.status(200).json(bookings); // Return the actual bookings
  } catch (error) {
    console.error("Failed to find user bookings", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc find user bookings by id
// @route Get /api/bookings/:id
// @access private
exports.getBookingsById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking Not Found" });
    }
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not Authorized" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error getting booking by ID", error);
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid booking ID format" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// @desc cancel bookings
// @route delete /api/bookings/:id
// @access private
exports.cancelBookings = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking Not Found" });
    }
    if (booking.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this booking" });
    }
    booking.status = "Cancelled";
    await booking.save();
    res
      .status(200)
      .json({ message: "Booking cancelled successfully", booking }); // Include the updated booking in the response
  } catch (error) {
    console.error("Error cancelling booking", error);
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid booking ID format" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// This is cleaner for exporting multiple functions
module.exports = {
  createBookings,
  getMyBookings,
  getBookingsById,
  cancelBookings,
};
