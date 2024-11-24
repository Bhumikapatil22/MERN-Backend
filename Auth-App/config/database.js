import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB connected succcessfully");
  } catch (error) {
    console.log("Connection failed",error);
    process.exit(1);
  }
};

export default dbConnect;