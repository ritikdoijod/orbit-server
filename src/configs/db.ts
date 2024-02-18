import mongoose from "mongoose";

export const connectToDB = async () => {
  const MONGODB_URL: string = process.env.MONGODB_URL || "";
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log(error.message);
  }
};
