// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const VideoSchema = new Schema(
  {
    title: {
      type: String,
    },
    vidoeUrl: {
      type: String,
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

const VideoModel = mongoose.model("Ebook", VideoSchema);

module.exports = VideoModel;
