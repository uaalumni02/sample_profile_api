import mongoose from "mongoose";
const { Schema } = mongoose;

const profileInformationSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  bio: {
    type: String,
    required: [true, "bio is required"]
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Profile", profileInformationSchema);