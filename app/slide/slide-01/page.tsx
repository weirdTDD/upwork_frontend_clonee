import { CircleUserRound } from "lucide-react"
import Image from "next/image"


interface SlidePageProps {
    id: string;
    description: string;
    imageUrl: string;

}

const SlidePage = () => {
  return (
    <div className="">
        <div>
            {/*Navigation Bra*/}
            <nav className='shadow-sm fixed w-full bg-white z-10 mb-10 hidden md:block'>
                <div className='w-full'>
                    <div className='flex items-center justify-between h-20 w-full mx-6'>
                        
                        <div className="mr-20">
                            <Image
                                src= "https://seekvectors.com/storage/images/Upwork-01.svg"
                                alt=''
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

        <div className=" min-h-1/2 max-w-7xl mx-auto">
            <div className="py-20  px-4">
                <div className="mt-10">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                        Got it. What&apos;s your biggest goal for freelancing?
                    </h2>
                    <p className="text-md font-medium text-gray-600">
                        Different people come to upwork for various reasons. We want to highlight the opportunities that fit your goals best while showing you all the possibilities. 
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                        src= "/message-icon.png"
                        alt=''
                        className="w-60 h-60 object-contain"
                        width={1200}
                        height={800}
                    />

                </div>
            
            </div>        
        
        </div>



    </div>

    )
}


export default SlidePage