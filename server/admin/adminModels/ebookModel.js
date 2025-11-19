// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const EbookSchema = new Schema(
  {
    title: {
      type: String,
    },
    data: {
      type: Object,
    },
    catagory: {
      type: String,
    },
    ageGroup: {
      type: String,
    },
    language: {
      type: String,
    },
    Narrator: {
      type: String,
    },
    tunmnail: {
      type: String,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    timespent: {
      type: Number,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    accessType: {
      type: String,
      enum: ["free", "paid", "single"],
      default: "free",
    },
  },
  { timestamps: true }
);

const EbookModel = mongoose.model("Ebook", EbookSchema);

module.exports = EbookModel;
