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

### Finish userRouth.js

###
