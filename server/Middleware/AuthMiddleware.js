import jwt from "jsonwebtoken";
import User from "../Models/User.js";


export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "ref hub secret", async (err, decodeToken) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(decodeToken);
        req.user = await User.findById(decodeToken.id)
        next();
      }
    });
  }else {
    res.redirect("/login");
  }
};