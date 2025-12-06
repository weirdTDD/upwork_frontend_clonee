import Footer from "@/components/footer/page"
import { CircleUserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="">
        <div>

            <nav className='shadow-sm fixed w-full bg-white z-10  md:block'>
                <div className='w-full'>
                    <div className='flex items-center justify-between h-20 w-full mx-6'>
                        {/* 1st Block */}
                        <div className="mr-20">
                            <Image
                                src= "https://seekvectors.com/storage/images/Upwork-01.svg"
                                alt='logo'
                                className="w-50 h-20 object-contain"
                                width={1200}
                                height={400}
                            />
                        </div>

                        <div className=' md:block'>
                            <div className='mr-10 flex items-baseline space-x-5'>

                                <CircleUserRound className="w-6 h-6 mr-8 text-gray-700" />


                            </div>

                        </div>

                    </div>
                </div>
            </nav>

        </div>

        <div className=" min-h-1/2 max-w-4xl mx-auto">
            <div className="py-20  px-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                        src= "/message-icon.png"
                        alt=''
                        className="w-60 h-60 object-contain"
                        width={1200}
                        height={800}
                    />

                    <div className="flex flex-col items-center mb-10">
                        <h2 className="text-4xl font-semibold  text-gray-800 text-center">Verify your email to continue</h2>
                        <p className="text-lg font-medium text-gray-500 text-center mt-8 mb-2">
                            We just sent an email to the address: iamleonard@gmail.com <br/>
                            Please check your mail and select the provided to verify your address.
                        </p>

                    </div>

                    <div className="flex flex-col-2 items-center justify-center gap-4">

                        <Link
                            href="/auth/sign-up"
                            className="bg-white border border-green-600 text-green-600 hover:bg-green-700 px-6 py-2.5 mb-8 rounded-xl  hover:text-white transition-colors hover:scale-105"
                        >
                            Send again
                        </Link>

                        <Link
                            href="/auth/sign-up"
                            className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 mb-8 rounded-xl  hover:scale-105 transition-transform"
                        >
                            Create my account
                        </Link>

                     </div>

                     <a href="" className="text-green-600 font-bold underline">Didn&apos;t receive email?</a>

                </div>

            </div>
        </div>

        <div className="">
            <Footer />
        </div>
      
    </div>
  )
}

export default page
