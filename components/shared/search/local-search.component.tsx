"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type TLocalSearchBarProps = {
  route: string;
  iconPosition?: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

export const LocalSearchBar = (props: TLocalSearchBarProps) => {
  const { route, iconPosition, imgSrc, placeholder, otherClasses } = props;
  return (
    <div
      className={cn(
        "background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 justify-between",
        iconPosition === "right" ? "flex-row-reverse" : "",
        otherClasses
      )}
    >
      <Image
        src={imgSrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};
