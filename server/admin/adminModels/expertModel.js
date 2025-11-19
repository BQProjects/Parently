// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const ExpertSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    specialization: {
      type: String,
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
    },
    profile: {
      type: String,
    },
    bookedSessions: [{ type: Date }],
  },
  { timestamps: true }
);

const ExpertModel = mongoose.model("Expert", ExpertSchema);

module.exports = ExpertModel;
