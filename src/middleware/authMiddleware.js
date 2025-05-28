const User = require("@/models/User");
const jwt = require("jwt");

const auth = async (req, res, next) => {
  let token;

  // Check for token in header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Attach user to the request (excluding password)
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error("Auth middleware error", error);
      res.status(404).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
module.exports = auth;
