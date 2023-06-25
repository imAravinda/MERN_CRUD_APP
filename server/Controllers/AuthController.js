import User from "../Models/User.js";
import { createToken, validatePassword } from "../Util/AuthUtil.js";

// METHOD:POST,
// END POINT : api/v1/auth/login
// DESC : User Login
const maxAge = 3 * 24 * 60 * 60;
export const loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ Email: Email });
    if (user != null) {
      const result = await validatePassword(Password, user.Password);
      if (result) {
        const token = createToken(user._id, user.Email, user.Role);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.json(token);
      } else {
        res.status(400).json({
          status: "Error",
          message: "Invalid Password",
        });
      }
    } else {
      res.status(400).json({
        status: "Error",
        message: "Invalid Email",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Server Error",
      message: err.message,
    });
  }
};

// METHOD:POST,
// END POINT : api/v1/auth/logout
// DESC : User Logout
export const LogoutUser = async (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({
        status: "Success",
        message: 'User Logged Out',
      });
  };

  export const getUserProfile = async (req, res) => {
    try {
      const GetUser = req.user;
      const findUser = await User.findOne({ Email: GetUser.Email });
      if (findUser) {
        const user = findUser;
        res.status(201).json({
          message: `Account Details of ${user.Name}`,
          user,
        });
      } else {
        res.status(404).json({
          message: "No user exist",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  