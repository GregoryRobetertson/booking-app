# Booking App

A full stack booking system built with Next.js, MongoDB, Firebase, and Tailwind CSS. Users can register, log in, and book appointments

# Features

- User registration & login with Firebase Authentication
- Scheudle and view bookings stored in MongoDB
- Secure API routes for booking management
- MongoDB database integration wiht Mongoose
- Tailwind CSS styling for a smooth and responsive UI

# Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Firebase Auth
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: Firebase Authentication (Email/Password & Google)

## Troubleshooting

### Error: Cannot find module './models/User'

**Cause:** Incorrect import path  
**Fix:** Update to `require('./src/models/User')`

### Bug: User emails saved with whitespace

**Cause:** Missing `.trim()` in schema  
**Fix:** Add `trim: true` to `email` and `name` fields in `User.js`

### Unresolved Issue: ReferenceError: createBookings is not defined

**Description**
I'm currently facing a persistent ReferenceError: createBookings is not defined. This error is occurring when my bookingRoutes.js file attempts to import and use the createBookings function from bookingController.js.

The stack trace points to bookingController.js (specifically line 78, column 3), which is where module.exports = { createBookings, ... }; is located. This suggests that createBookings isn't recognized at the point of export.

What I've Checked So Far
bookingController.js Confirmed Correct: I've meticulously reviewed the bookingController.js file.
The createBookings function is defined using exports.createBookings = async (req, res) => { ... };.
The module.exports = { createBookings, ... }; statement is at the very end of the file, after all function definitions, ensuring createBookings is defined before it's exported.
There are no typos in the function name within bookingController.js itself (i.e., createBookings consistently uses an uppercase 'B').
Next Steps to Investigate
Given the controller file seems correct, the issue likely lies in how it's being consumed or the project's module configuration. I'll focus on these areas next:

Review bookingRoutes.js Import:

Mismatched Name: Double-check the require statement in src/routes/bookingRoutes.js to ensure that createBookings is imported with the exact same capitalization (createBookings with an uppercase 'B').
Correct Destructuring: Confirm that the function is being correctly destructured: const { createBookings } = require("../controllers/bookingController");.
Examine package.json for "type": "module":

Check if my package.json file contains the line "type": "module". If it does, Node.js is treating files as ES Modules, which might cause issues with require/module.exports syntax. I might need to remove this line or refactor to import/export.
Perform a Full Server Restart:

A complete restart of the Node.js application (e.g., Ctrl+C then npm start) will ensure all modules are reloaded and no old cached versions are being used.
I'll be tackling this tomorrow. Any insights or suggestions are welcome!
