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

### MongoDB Connection Error: `querySrv ENOTFOUND _mongodb._tcp.undefined.mongodb.net`

**Cause:** `.env` file had `MONGODB_URI=MONGODB_URI=...` instead of `MONGODB_URI=...`

**Fix:** Remove duplicate key and ensure URI is correct.

---

### Module Not Found: `Cannot find module './models/User'`

**Cause:** Incorrect import path — `User.js` is in `src/models`, not root.

**Fix:** Update import to:

```js
const User = require("./src/models/User");
```
