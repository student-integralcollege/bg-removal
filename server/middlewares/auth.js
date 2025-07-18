import jwt from "jsonwebtoken";

// Middleware to authenticate user using JWT token to fetch clerk id
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({success:false, message: "No token provided" });
    }
 
    const token_decoded = jwt.decode(token);
    req.body.clerk_id = token_decoded.clerk_id;
    next();
  } catch (error) {
    return res.status(401).json({success:false, message: "Unauthorized" });
  }
};

export default authUser;
