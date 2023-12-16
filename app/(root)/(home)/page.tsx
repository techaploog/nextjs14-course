import { QuestionCard } from "@/components/cards";
import { HomeFilters } from "@/components/home";
import { Filter } from "@/components/shared/filter";
import { LocalSearchBar, NoResult } from "@/components/shared/search";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants";
import { generateDummyQuestion } from "@/lib/mock_generator";
import { TQuestionCardProps } from "@/types";
import Link from "next/link";

const questions: TQuestionCardProps[] = Array.from({ length: 5 }, (_, index) =>
  generateDummyQuestion(index + 1)
);

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
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answer={question.answer}
              createAt={question.createAt}
            />
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
