"use client";

import { HomePageFilters } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const HomeFilters = () => {
  const isActive = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            isActive === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500"
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};
