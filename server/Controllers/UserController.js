import User from "../Models/User.js";
import { GeneratePassword, GenerateSalt, createToken } from "../Util/AuthUtil.js";

// METHOD:POST,
// END POINT : api/v1/users/signup
// DESC : Sign Up
export const RegisterUser = async (req, res) => {
  const { Name, Email, Password, ConfirmPassword } = req.body;
  try {
    const user = await User.findOne({ Email: Email });
    if (!user) {
      const salt = await GenerateSalt();
      const encryptedPassword = await GeneratePassword(Password, salt);
      const confirmEncryptedPassword = await GeneratePassword(
        ConfirmPassword,
        salt
      );
      if (encryptedPassword == confirmEncryptedPassword) {
        const newuser = await User.create({
          Name: Name,
          Email: Email,
          Password: encryptedPassword,
          Role: "User",
        });
        res.status(200).json({
          status: "Success",
          message: "User Registerd Successfully",
          data: {
            newuser,
          },
        });
      } else {
        res.status(400).json({
          status: "Error",
          message: "Confirmed Password Doesn't Match",
        });
      }
    } else {
      res.status(400).json({
        status: "Error",
        message: "This user is already exist",
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
// END POINT : api/v1/user
// DESC : Add User
export const AddUser = async (req, res) => {
  const user = req.user;
  try {
    if (user.Role != "User") {
      const { Email, Role, Name } = req.body;
      const user = await User.findOne({ Email: Email });
      if (user == null) {
        const Password = "12345678";
        const salt = await GenerateSalt();
        const encryptedPassword = await GeneratePassword(Password, salt);
        const newuser = await User.create({
          Name:Name,
          Email: Email,
          Password: encryptedPassword,
          Role: Role,
        });
        res.status(200).json({
          status: "Success",
          message: "User Added Successfully",
          data: {
            newuser,
          },
        });
      } else {
        res.status(400).json({
          status: "Error",
          message: "This user is already exist",
        });
      }
    }
    else{
      res.status(401).json({
        status: "Error",
        message: "User Have No Authorization to do this action",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Server Error",
      message: err.message,
    });
  }
};

// METHOD:GET,
// END POINT : api/v1/user
// DESC : Get User By Email
export const getUserByEmail = async (req, res) => {
  try {
    const user = req.user;
    if (user.Role != "User") {
      const findUsers = await User.find()
      if (findUsers !== null) {
        res.status(200).json({
          status: "Success",
          message: `Details of users`,
          data: {
            findUsers,
          },
        });
      } else {
        res.status(404).json({
          status: "Error",
          message: `There are no any users`,
        });
      }
    } else {
      res.status(401).json({
        status: "Error",
        message: "User Have No Authorization to do this action",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Server Error",
      message: error.message,
    });
  }
};

export const updateUserProfile = async (req, res) => {
  const user = req.user;
  try {
    if (user.Role != "User") {
      console.log(req.body);
      const userupdate = await User.findOneAndUpdate(
        { Email: req.body.Email },
        req.body,
        { new: true }
      );
      createToken(userupdate._id, userupdate.Email);
      res.status(201).json({
        status:"Success",
        message: "Update User Successfully",
        data: {
            userupdate,
        },
      });
    } else {
        res.status(401).json({
            status: "Error",
            message: "User Have No Authorization to do this action",
          });
    }
  } catch (error) {
    return res.status(500).json({
        status: "Server Error",
        message: error.message,
      });
  }
};

export const updateOwnProfile = async(req,res)=>{
  const user = req.user;
  try {
    const finduser = await User.findOne({Email:user.Email});
    if(finduser){
      const updateuser = await User.findByIdAndUpdate(finduser.id,req.body,{new:true});
      console.log(updateuser);
      createToken(updateuser._id, updateuser.Email);
      res.status(201).json({
        status:"Success",
        message: "Update User Successfully",
        data: {
          updateuser,
        },
      });
    }else{
      res.status(401).json({
        status: "Error",
        message: "User doesn't exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Server Error",
      message: error.message,
    });
  }
}

export const removeUserByEmail = async(req,res)=>{
  const user = req.user;
  try {
    if(user.Role != "User"){
      const finduser = await User.findOne({Email:req.params.Email});
      if(finduser){
        await User.findByIdAndDelete(finduser.id);
        res.status(200).json({
          status:"Success",
          message:"User Removed Successfully"
        })
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: "Server Error",
      message: error.message,
    });
  }
}