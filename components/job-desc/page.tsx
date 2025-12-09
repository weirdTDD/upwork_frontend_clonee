"use client";

import { Bookmark, Flag } from "lucide-react";
import { div } from "motion/react-client";
import { IoLocationOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

interface JobCardProps {
  title: string;
  featured?: boolean;
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
  featured= true,
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
      {featured &&( 
        <div className="text-purple-700 text-sm font bold">
          <p>Featured</p>
        </div>
      )}
      {/* Posted Time */}
      <p className="text-xs text-gray-500">Posted {posted}</p>

      {/* Title + Icons */}
      <div className="flex justify-between items-start">
        <h2 className="text-[17px] font-semibold leading-tight">{title}</h2>

        <div className="flex gap-3 text-gray-500">
          <Flag className="w-4 h-4 cursor-pointer hover:text-black" />
            <Bookmark className="w-4 h-4 cursor-pointer hover:text-black" />
          </div>
      </div>

      {/* Job Meta */}
      <p className="text-xs text-gray-600">
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
                className="text-xs bg-gray-200 px-3 py-1 rounded-full border border-gray-200 text-gray-700"
            >
                {tag}
            </span>
            ))}
        </div>

      {/* Footer */}
      <div className="flex flex-col justify-center items-start mt-2 space-y-2">
            <div className="flex items-center gap-4 text-sm text-gray-700">
            {/* Verified Badge */}
                {verified && (
                  <div className="flex items-center gap-1 text-gray-500 font-medium ">
                    <MdVerified  className="w-5 h-5 text-blue-700  "/>
                      Payment verified
                  </div>
                )}

                <span className="text-gray-500">⭐ 4.5</span>

                <span className="text-gray-600">{spent} spent</span>

                <span className="flex items-center gap-2 text-gray-600"><IoLocationOutline className="w-4 h-4"/>  {country}</span>
            </div>

            <p className="text-xs text-gray-500">Proposals: {proposals}</p>
      </div>
    </div>
  );
}
