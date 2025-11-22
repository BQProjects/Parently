const moongoose = require("mongoose");
const { Schema } = moongoose;

const SubscriptionSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    durationInMonths: {
      type: Number,
    },
    features: [
      {
        type: String,
      },
    ],
    tumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SubscriptionModel = moongoose.model("Subscription", SubscriptionSchema);

module.exports = SubscriptionModel;
