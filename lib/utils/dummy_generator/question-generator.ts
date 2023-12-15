import { TQuestionCardProps } from "@/types";
import add from "date-fns/add";

export const generateDummyQuestion = (id: number): TQuestionCardProps => {
  return {
    _id: `question_${id}`,
    title: `Sample Question ${id}`,
    tags: [
      { _id: `tag_${id}_1`, name: `Tag ${id}_1` },
      { _id: `tag_${id}_2`, name: `Tag ${id}_2` },
    ],
    author: {
      _id: `author_${id}`,
      name: `Author ${id}`,
      picture: `author_${id}_picture.jpg`,
    },
    upvotes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
    answer: [],
    createAt: add(new Date(), { minutes: Math.random() * 100 }),
  };
};
