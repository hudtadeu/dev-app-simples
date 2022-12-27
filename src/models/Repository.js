import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      unique: true
    },
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Repository', repositorySchema);