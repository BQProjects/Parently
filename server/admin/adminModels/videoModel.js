// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;
const CounterModel = require("../../admin/helperModels/counterModel");

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
    narrator: {
      type: String,
    },
    tunmbnail: {
      type: String,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    timespent: {
      type: Object,
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
    savedAs: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    serialNumber: { type: Number, unique: true },
  },
  { timestamps: true }
);

VideoSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await CounterModel.findOneAndUpdate(
      { name: "video" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    if (!counter) {
      const newCounter = new CounterModel({ name: "video", seq: 1 });
      await newCounter.save();
      this.serialNumber = 1;
    } else {
      this.serialNumber = counter.seq;
    }
  }
  next();
});

const VideoModel = mongoose.model("Video", VideoSchema);

module.exports = VideoModel;
