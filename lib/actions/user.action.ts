"use server";

import { User } from "@/database";
import { connectToDatabase } from "../utils";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error: any) {
    console.log("[ERROR]", error.message);
    throw error;
  }
}
