// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const AdminSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const AdminUserModel = mongoose.model("AdminUser", AdminSchema);

module.exports = AdminUserModel;
