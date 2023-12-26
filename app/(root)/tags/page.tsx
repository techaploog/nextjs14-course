import { TagCard } from "@/components/cards";
import { Filter } from "@/components/shared/filter";
import { LocalSearchBar, NoResult } from "@/components/shared/search";
import { TagFilters } from "@/constants";
import { getAllTags } from "@/lib/actions";
import React from "react";

const TagPage = async () => {
  const result = await getAllTags({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags"
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden  max-md:flex"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => <TagCard key={tag._id} tag={tag} />)
        ) : (
          <NoResult
            title="No Tags Found"
            description="There are no tags founded"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  );
};

export default TagPage;
