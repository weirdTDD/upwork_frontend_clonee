"use client";

import SelectableCard, { Option }   from "@/components/S-Cards/page"
import { CircleUserRound } from "lucide-react"
import Image from "next/image"

const SlidePage = () => {
    const options: Option[] = [
        {
            id: "1",
            title: "To earn my main income",
            subtitle: "I want this to be my full-time job.",
        },
        {
            id: "2",
            title: "To make money on the side",
            subtitle: "Part-time side hustle and gigs.",
        },
        {
            id: "3",
            title: "To get experience for full-time job",
            subtitle: "Build new skills and network.",
        },
        {
            id: "4",
            title: "I dont have a goal in mind yet",
            subtitle: "Build new skills and network.",
        },
    ];

    const handleCardSelection = (title: string, isSelected: boolean): void => {
        console.log(`${title} is now ${isSelected ? 'Selected' : 'Deselected'}`);
    };

    return (
        <div className="">
            <div>
                {/*Navigation Bar*/}
                <nav className='shadow-sm fixed w-full bg-white z-10 mb-10 hidden md:block'>
                    <div className='w-full'>
                        <div className='flex items-center justify-between h-20 w-full mx-6'>
                            
                            <div className="mr-20">
                                <Image
                                    src="https://seekvectors.com/storage/images/Upwork-01.svg"
                                    alt='Upwork logo'
                                    className="w-50 h-20 object-contain"
                                    width={1200}
                                    height={400}
                                />
                            </div>

                            <div className='hidden md:block'>
                                <div className='mr-10 flex items-baseline space-x-5'>
                                    <CircleUserRound className="w-6 h-6 mr-8 text-gray-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="min-h-1/2 max-w-7xl mx-auto">
                <div className="py-20 px-4">
                    <div className="mt-10">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                            Got it. What&apos;s your biggest goal for freelancing?
                        </h2>
                        <p className="text-md font-medium text-gray-600">
                            Different people come to upwork for various reasons. We want to highlight the opportunities that fit your goals best while showing you all the possibilities. 
                        </p>
                    </div>
                            {/* Grid Layout for Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {options.map((option) => (
                                <SelectableCard
                                    key={option.id}
                                    id={option.id}
                                    title={option.title}
                                    subtitle={option.subtitle}
                                    onSelect={handleCardSelection}
                                />
                            ))}
                        </div>
                </div>        
            </div>
        </div>
    )
}

export default SlidePage