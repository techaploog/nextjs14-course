"use server";

import { Tag, User } from "@/database";
import { connectToDatabase } from "../utils";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./share.types";

export async function getTopInteratedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    // const {userId, limit = 3} = params;
    const { userId } = params;
    const user = await User.findById(userId);

    if (!user) throw new Error("User not found.");

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error: any) {
    console.log("[ERROR]", error.message);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    const tags = await Tag.find({});

    return { tags };
  } catch (error: any) {
    console.log("[ERROR]", error.message);
    throw error;
  }
}
