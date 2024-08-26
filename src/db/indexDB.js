import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const MONGODB_URI =
  "mongodb+srv://dineshjadhav:Raider123@cluster0.bm35f.mongodb.net";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `\n MongoDB connected !! DH HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed !!", error);
    process.exit(1);
  }
};

export default connectDB;
