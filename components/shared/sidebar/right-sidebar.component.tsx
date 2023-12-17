import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RenderTag } from "../render-tag";

const hotQuestions = [
  { _id: "1", title: "Question 1" },
  { _id: "2", title: "Question 2" },
  { _id: "3", title: "Question 3" },
  { _id: "4", title: "Question 4" },
  { _id: "5", title: "Question 5" },
];

const popularTags = [
  { _id: "1", title: "Tag1", totqlQuestions: 5 },
  { _id: "2", title: "Tag2", totqlQuestions: 4 },
  { _id: "3", title: "Tag3", totqlQuestions: 3 },
  { _id: "4", title: "Tag4", totqlQuestions: 2 },
  { _id: "5", title: "Tag5", totqlQuestions: 1 },
];

export const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="shevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.title}
              totalQuestions={tag.totqlQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};
