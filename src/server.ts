import express from "express";
import dotenv from "dotenv";

import { connectToDB } from "./configs/db";

// import middleware

// import routes
import userRoute from "./routes/user";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const app = express();
    app.use(express.json());

    await connectToDB();

    app.use("/api/v1", userRoute);

    app.listen(PORT, () => {
      console.log(`Orbit server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
