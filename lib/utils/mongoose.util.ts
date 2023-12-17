import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("[ERROR] MISSING MONGODB_URL");

  if (isConnected) return console.log("[INFO] MongoDB is already connected.");

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    isConnected = true;
    console.log("[INFO] MongoDB is already connected.");
  } catch (error: any) {
    console.log(
      "[ERROR]",
      error.message ? error.message : "MongoDB connection error!"
    );
  }
};
