"use client";

import { Bookmark, Flag } from "lucide-react";

interface JobCardProps {
  title: string;
  posted: string;
  rate: string;
  level: string;
  duration: string;
  hours: string;
  description: string;
  tags: string[];
  country: string;
  spent: string;
  verified?: boolean;
  proposals: string;
}

export default function JobCard({
  title,
  posted,
  rate,
  level,
  duration,
  hours,
  description,
  tags,
  country,
  spent,
  verified = true,
  proposals,
}: JobCardProps) {
  return (
    <div className="border-b-2 border-gray-200 pb-8 pt-4 flex flex-col gap-3 w-full">
      {/* Posted Time */}
      <p className="text-sm text-gray-500">Posted {posted}</p>

      {/* Title + Icons */}
      <div className="flex justify-between items-start">
            <h2 className="text-[17px] font-semibold leading-tight">{title}</h2>

            <div className="flex gap-3 text-gray-500">
                <Flag className="w-4 h-4 cursor-pointer hover:text-black" />
                <Bookmark className="w-4 h-4 cursor-pointer hover:text-black" />
            </div>
      </div>

      {/* Job Meta */}
      <p className="text-sm text-gray-600">
        {rate} • {level} • Est. Time: {duration}, {hours}
      </p>

      {/* Description */}
      <p className="text-[15px] text-gray-700 max-w-3xl leading-6">
            {description}{" "}
            <button className="text-green-700 hover:underline">more</button>
      </p>

      {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag, i) => (
            <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-700"
            >
                {tag}
            </span>
            ))}
        </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-4 text-sm text-gray-700">
            {/* Verified Badge */}
                {verified && (
                    <div className="flex items-center gap-1 text-blue-700 font-medium">
                        <span className="w-2 h-2 bg-blue-700 rounded-full" />
                        Payment verified
                    </div>
                )}

                <span className="text-gray-500">⭐ 4.5</span>

                <span className="text-gray-600">{spent} spent</span>

                <span className="text-gray-600">{country}</span>
            </div>

            <p className="text-sm text-gray-500">Proposals: {proposals}</p>
      </div>
    </div>
  );
}
