import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, "full name is required"] },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    universityId: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password required"],
      minlength: [6, "Too short password"],
    },
    universityCard: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;
