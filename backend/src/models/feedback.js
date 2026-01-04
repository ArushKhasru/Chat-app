import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500
    },
    category: {
      type: String,
      enum: ["bug", "feature", "ui", "performance", "other"],
      default: "other"
    }
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
