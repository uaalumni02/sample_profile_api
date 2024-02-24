import mongoose from "mongoose";
const { Schema } = mongoose;

const profileInformationSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  bio: {
    type: String,
    required: [true, "bio is required"],
  },
  contact_info: {
    type: String,
    required: [true, "contact info is required"],
  },
  pronouns: {
    type: String,
    required: [true, "pronouns are required"],
  },
  emergency_contact: {
    type: String,
    required: [true, "emergency contacts are required"],
  },
  roles: {
    type: String,
    required: [true, "roles are required"],
  },
  resume: {
    type: String,
    required: [true, "resume is required required"],
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Profile", profileInformationSchema);
