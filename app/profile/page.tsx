"use client";

import JobCard from "@/components/job-desc/page";
import Navbar from "@/components/profile-navbar/page";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineBadge } from "react-icons/md";


export default function UpworkDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      {/* Header */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex gap-6 px-10 py-6 lg:mx-[5%]">
        {/* Left Section */}
        <div className="flex-1 mt-24">
          {/* Banner */}
          <div className="bg-linear-to-r from-green-800 via-green-400  bg-green-900 text-white rounded-xl p-3 mb-6 container flex items-center justify-between xs:mx-10">
            <div className="max-w-md px-2 py-4">
              <h3 className="text-xl font-medium">Freelancer Plus with new perks</h3>
              <h2 className="mt-2 text-2xl font-semibold">100 monthly Connects and full access to Uma, Upwork&apos;s Mindful AI.</h2>
              <button className="mt-16 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                Learn more
              </button>
            </div>
            <div className="relative w-32 h-32 rounded-xl hidden sm:block mr-32 opacity-40">
              <Image
                src="/inner.png"
                alt='inner-carousel'
                className="w-35 h-35 object-fit rounded-xl "
                width={1200}
                height={400}
            />
            </div>
          </div>

          {/* Job Search */}
          <div className="flex items-center gap-2 mb-4 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 hover:border-green-500 shadow-md">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              id="search-02"
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

          <div className="px-3">
            <h3 className="text-lg text-gray-500 font-medium mb-3">Browse jobs that match your experience to a client&apos;s hiring preferences. Ordered by most relevant.</h3>
          </div>

          {/* Job Card */}
          <div className="px-3 border-t border-gray-200">
            <JobCard 
              id={1}
              title="Seeking Designer for Fashion E-commerce Site"
              featured={true}
              posted="24 minutes ago"
              rate="Hourly: $20-$35"
              level="Expert"
              duration="1 to 3 months"
              hours="30+ hrs/week"
              description="Summary We are an accessoryies company immediately seeking a creative and experienced Designer/ Creative Director for our website redesign project. WE need an expect that will design and set the creative direction of our website (redesigned site), ensuring that it aligns with our brand and user experience goals. They will design to create a visually appealling user friendly"
              tags={[
              "Graphic Design",
              "Adobe Illustrator",
              "Fashion & Beauty"
              ]}
              verified={true}
              spent="$30K+"
              stars={4}
              country="United States"
              proposals="5 to 10"
              
            />


            <JobCard 
              id={2}
              title="Modern Web/UX Designer for Data Dashboards"
              featured={true}
              posted="45 minutes ago"
              rate="Hourly: $20-$35"
              level="Intermediate"
              duration="1 to 3 months"
              hours="30+ hrs/week"
              description="We are seeking a talented modern web and UX designer with extensive front-end experience to create visually appealing dashboards.We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you."
              tags={[
              "Web Design",
              "Wireframing",
              "Prototyping",
              "Mockup",
              "Graphic Design",
              ]}
              verified={true}
              spent="$40K+"
              stars={3}
              country="Slovenia"
              proposals="5 to 10"
                
            />

            <JobCard 
              id={3}
              title="Modern Web/UX Designer for Data Dashboards"
              featured={true}
              posted="2 hours ago"
              rate="Hourly: $20-$35"
              level="Intermediate"
              duration="1 to 3 months"
              hours="30+ hrs/week"
              description="We are seeking a talented modern web and UX designer with extensive front-end experience to create visually appealing dashboards.We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you."
              tags={[
              "Web Design",
              "Wireframing",
              "Prototyping",
              "Mockup",
              "Graphic Design",
              ]}
              verified={true}
              spent="$40K+"
              stars={5}
              country="Slovenia"
              proposals="5 to 10"
                
            />

          </div>


        </div>

        {/* Right Sidebar */}
        <aside className="w-3/12 space-y-6 hidden md:block mt-24">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-300 text-center "><p className="mt-2 font-bold text-white">SL</p></div>
                <div className="flex flex-col items-start ">
                    <h3 className="font-semibold">Sam L.</h3>
                    <p className="text-gray-500 text-sm">Web & Mobile Design</p>
                </div>
                
            </div>
            
            <div className="mt-8">
                <a href="" className="text-sm text-green-600 underline">Complete your Profile</a>

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
            <Link href="" className="mt-6 text-sm text-green-600 font-medium underline">Get an IDV Badge</Link>
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
