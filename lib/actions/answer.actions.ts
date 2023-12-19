"use server";

import { Answer, Question } from "@/database";
import { connectToDatabase } from "../utils";
import { CreateAnswerParams } from "./share.types";
import { revalidatePath } from "next/cache";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    const newAnswer = await Answer.create({
      content,
      author,
      question,
    });

    // Add the answer to question
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // TODO: add interaction.

    revalidatePath(path);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
