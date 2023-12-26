"use client";

import {
  downvoteAnswer,
  downvoteQuestion,
  upvoteAnswer,
  upvoteQuestion,
} from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface IVoteProps {
  type: "question" | "answer";
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

export const Votes = (props: IVoteProps) => {
  const pathname = usePathname();
  //   const router = useRouter();
  const [isVoting, setIsVoting] = useState(false);
  const {
    type,
    itemId,
    userId,
    upvotes,
    hasupVoted,
    downvotes,
    hasdownVoted,
    hasSaved,
  } = props;

  const handleSave = () => {
    // TODO: Implement this function
  };

  const handleVote = async (action: "upvote" | "downvote") => {
    if (!userId || isVoting) return;

    try {
      setIsVoting(true);

      if (action === "upvote") {
        if (type === "question") {
          await upvoteQuestion({
            questionId: JSON.parse(itemId),
            userId: JSON.parse(userId),
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        } else if (type === "answer") {
          await upvoteAnswer({
            answerId: JSON.parse(itemId),
            userId: JSON.parse(userId),
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        }
        // TODO: show toast message
      } else if (action === "downvote") {
        if (type === "question") {
          await downvoteQuestion({
            questionId: JSON.parse(itemId),
            userId: JSON.parse(userId),
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        } else if (type === "answer") {
          await downvoteAnswer({
            answerId: JSON.parse(itemId),
            userId: JSON.parse(userId),
            hasupVoted,
            hasdownVoted,
            path: pathname,
          });
        }
        // TODO: show toast message
      }
    } catch (error: any) {
      console.log("[ERROR]", error.message);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex-center gap-2.5">
        {/* Up Vote */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasupVoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            alt="upvote"
            height={18}
            width={18}
            className={`${isVoting ? " cursor-wait" : "cursor-pointer"}`}
            onClick={() => handleVote("upvote")}
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p>{formatNumber(upvotes)}</p>
          </div>
        </div>

        {/* Down Vote */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasdownVoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            alt="downvote"
            height={18}
            width={18}
            className={`${isVoting ? " cursor-wait" : "cursor-pointer"}`}
            onClick={() => handleVote("downvote")}
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p>{formatNumber(downvotes)}</p>
          </div>
        </div>
      </div>

      {type === "question" && (
        <Image
          src={
            hasSaved
              ? "/assets/icons/star-filled.svg"
              : "/assets/icons/star-red.svg"
          }
          alt="star"
          height={18}
          width={18}
          className="cursor-pointer"
          onClick={() => handleSave}
        />
      )}
    </div>
  );
};
