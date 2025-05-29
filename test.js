// test.js
try {
  const controller = require("./src/controllers/bookingController");
  console.log("Controller loaded successfully!");
  console.log("createBookings function:", typeof controller.createBookings);
  if (typeof controller.createBookings === "function") {
    console.log("createBookings is a function as expected.");
  } else {
    console.error(
      "createBookings is NOT a function. Its type is:",
      typeof controller.createBookings
    );
  }
} catch (error) {
  console.error("Failed to load bookingController.js:", error);
}
