import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Message", messageSchema);
