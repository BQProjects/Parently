// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
    },
    videosCount: {
      type: Number,
      default: 0,
    },
    EbooksCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
