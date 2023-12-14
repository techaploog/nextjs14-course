import { HomeFilters } from "@/components/home";
import { Filter } from "@/components/shared/filter";
import { LocalSearchBar, NoResult } from "@/components/shared/search";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants";
import Link from "next/link";

const questions = [
  // {
  //   _id: 1,
  //   title: "title_1",
  //   tags: [
  //     { _id: 1, name: "python" },
  //     { _id: 2, name: "sql" },
  //   ],
  //   author: "niabb",
  //   upvotes: 10,
  //   views: 100,
  //   answer: 2,
  //   createAt: "2023-12-14T12:00:00.000Z",
  // },
  // {
  //   _id: 2,
  //   title: "title_2",
  //   tags: [
  //     { _id: 1, name: "node" },
  //     { _id: 2, name: "mongodb" },
  //   ],
  //   author: "niabb",
  //   upvotes: 10,
  //   views: 100,
  //   answer: 2,
  //   createAt: "2023-12-14T12:00:00.000Z",
  // },
];

export default async function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[45px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden  max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div key={question._id}>{question.title}</div>
          ))
        ) : (
          <NoResult
            title={`There's no question to show`}
            description={"Be the first to break the silence!"}
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
