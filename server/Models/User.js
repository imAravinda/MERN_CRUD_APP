import mongoose from "mongoose";
import validator from "validator";
const UserSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Must enter the name"],
    },
    Password: {
      type: String,
      required: [true, "User must have to enter the password"],
      minlength: 8,
      unique: true,
    },
    Email: {
      type: String,
      required: [true, "User must have to enter the email"],
      unique: true,
      validate: {
        validator: function (val) {
          return validator.isEmail(val);
        },
        message: "Please enter the valid email",
      },
      immutable: true,
    },
    Role:{
        type: String,
      required: true,
      enum: {
        values: [
          "Admin",
          "Staff",
          "User"
        ],
        message:
          "User role must be one of : ['Admin','Staff','User']",
      },
      immutable: true,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
