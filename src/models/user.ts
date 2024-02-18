import mongoose, { Schema } from "mongoose";
import type { User } from "../schemas/user";
const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
