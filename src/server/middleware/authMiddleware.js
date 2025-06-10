const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("🔐 Received token:", token);
  if (!token) {
    console.error("❌ No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    console.log("✅ Token decoded:", decoded);

    let user = await User.findOne({ firebaseUid: decoded.uid });
    if (!user) {
      console.log("🔍 User not found. Creating...");
      user = await User.create({
        firebaseUid: decoded.uid,
        email: decoded.email,
        name: decoded.name || "Unnamed User",
      });
    }

    req.user = user;
    console.log("🙋‍♂️ Authenticated user:", user.email);
    next();
  } catch (error) {
    console.error("🔥 Firebase auth middleware error:", error.message);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
