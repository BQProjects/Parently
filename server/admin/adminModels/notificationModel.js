const moongoose = require("mongoose");
const { Schema } = moongoose;

const NotificationSchema = new Schema(
  {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    targetAudience: {
      type: String,
    },
    scheduleAt: {
      type: Date,
    },
    tumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NotificationModel = moongoose.model("Notification", NotificationSchema);

module.exports = NotificationModel;
