"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "@/app/api/api";
import React from "react";

export const Badges = ({ slug }) => {
  const { data: badge } = useSuspenseQuery({
    queryKey: ["badges", slug],
    queryFn: () => {
      return get(`/product-details/gallery/${slug}`).then(
        (res) => res?.payload?.stickers,
      );
    },
  });

  return (
    <>
      {badge?.length > 0 ? (
        <div className={`flex gap-2 items-center flex-wrap`}>
          {badge?.map(({ name }) => {
            if (name) {
              return (
                <div className="px-4 py-1 bg-croonus-1 w-fit text-white">
                  <span>{name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : null}
    </>
  );
};