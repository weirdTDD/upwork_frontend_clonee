"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { MdOutlineBadge } from "react-icons/md";
import { TbThumbDown } from "react-icons/tb";

export default function UpworkDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-green-700">Upwork</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent ml-2 outline-none"
            />
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex gap-6 px-10 py-6">
        {/* Left Section */}
        <div className="flex-1">
          {/* Banner */}
          <div className="bg-linear-to-r from-green-800  bg-blue-400 text-white rounded-xl p-3 mb-6 container flex items-center justify-between">
            <div className="max-w-md px-2 py-4">
              <h3 className="text-xl font-medium">Freelancer Plus with new perks</h3>
              <h2 className="mt-2 text-2xl font-semibold">100 monthly Connects and full access to Uma, Upwork&apos;s Mindful AI.</h2>
              <button className="mt-16 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                Learn more
              </button>
            </div>
            <div className="w-32 h-32 bg-green-600 rounded-xl hidden sm:block"></div>
          </div>

          {/* Job Search */}
          <div className="flex items-center gap-2 mb-4 border rounded-xl px-4 py-3 bg-gray-100">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="w-full bg-transparent outline-none "
            />
          </div>
            <h2 className="text-2xl font-semibold my-6">Jobs you might like</h2>

          {/* Job Section Tabs */}
          <div className="flex gap-6 border-b m-4 ">
            <Link href="" className="font-medium text-green-700 border-b-3 border-gray-900 pb-1">
              Best Matches
            </Link>
            <button>Most Recent</button>
            <button>Saved Jobs</button>
          </div>

          {/* Job Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <span className="text-purple-600 font-medium">Featured</span>
            <div className="flex items-center justify-between">
             <p className="text-sm text-gray-500 mt-1">Posted 45 minutes ago</p>
             <div className="flex gap-4 text-gray-700">
                <span> <TbThumbDown className="w-5 h-5" /> </span>
                <span><BiHeart className="w-5 h-5"/> </span>
             </div>
            </div>

            <h3 className="text-lg font-semibold mt-2">Seeking Designer for Fashion E-commerce Site</h3>
            <p className="mt-3 text-gray-700">
              We are seeking a creative and experienced Designer/Creative Director for our fashion website redesign project...
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 rounded-full bg-gray-100">Graphic Design</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Adobe Illustrator</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Fashion & Beauty</span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-medium text-blue-600">Payment verified</p>
                <p className="text-sm text-gray-500">$30K+ spent • United States</p>
              </div>
              <div >
                
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div className="flex flex-col items-start ">
                    <h3 className="font-semibold">Sam L.</h3>
                    <p className="text-gray-500 text-sm">Web & Mobile Design</p>
                </div>
                
            </div>
            
            <div className="mt-8">
                <a href="" className="text-sm text-green-700 underline">Complete your Profile</a>

                <div className="flex items-center space-x-6">
                    <div className="mt-4 w-2/3 bg-gray-200 h-1 rounded-full">
                        <div className="bg-gray-800 h-1 rounded-full" style={{ width: "70%" }}></div> 
                    </div>
                    <p className="font-bold mt-2">70%</p>
                </div>
            </div>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
                <MdOutlineBadge className="w-6 h-6" />
                <h3 className="font-bold">Identity verification</h3>
            </div>
            
            <p className="text-gray-500 text-sm my-2">Increase profile visibility in search results and win more work with an IDV Badge.</p>
            <Link href="" className="mt-6 text-sm text-green-700 font-medium underline">Get an IDV Badge</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Promote with ads</h3>
            <p className=" text-sm font-semibold text-gray-800 my-3">Availability badge <span className="text-xs"><br /> Off</span></p>
            <p className=" text-sm font-semibold text-gray-800">Boost your profile <span  className="text-xs"><br /> Off</span></p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Connects: 0</h3>
            <button className="mt-4 border-2 border-green-600 text-green-600 w-full py-2 rounded-lg font-medium">
              Buy Connects
            </button>
            <div className="flex items-center justify-center mt-3 gap-3 font-semibold" >
                <Link href="" className="text-sm text-green-600 underline"> View Details</Link>
                <span className="space-x-4">|</span>
                <Link href="" className="text-sm text-green-600 underline"> Free Connects</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
