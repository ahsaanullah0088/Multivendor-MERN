const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please enter your shop address!"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your shop phone number!"],
  },
  role: {
    type: String,
    default: "seller",
  },
  avatar:{
    public_id: {
      type: String,
      // required: true,
    },
    url: {
      type: String,
      required: true,
    },
 },
  zipCode: {
    type: Number,
    required: [true, "Please enter your shop zip code!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

//  Hash password
shopSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // ✅ Fix: use return
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
shopSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
shopSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("Shop", shopSchema);