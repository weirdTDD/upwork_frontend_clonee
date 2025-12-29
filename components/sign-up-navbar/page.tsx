import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar ()  {
  return (
    <div>
      <nav className='shadow-sm fixed w-full bg-white z-10 mb-10 hidden md:block'>
        <div className='w-full'>
            <div className='flex items-center justify-between h-20 w-full mx-6'>
                {/* 1st Block */}
                <div className="">
                    <Image
                        src= "/logox.png"
                        alt=''
                        className="w-38 h-16"
                        width={1200}
                        height={600}
                    />
                </div>

                <div className='hidden md:block'>
                    <div className='mr-10 flex items-baseline space-x-5'>
                        <Link 
                            href="/sign-in"
                            className= "text-black px-8 py-2 rounded-lg font-semibold hover:scale-105 shadow-xl transition-transform "
                        >
                            Here to hire a talent?
                        </Link>

                    

                        <Link 
                            href="/learn-more"
                            className= "text-green-500 px-8 py-2 rounded-lg font-semibold hover:scale-105 shadow-xl transition-transform "
                        >
                            Join as a Client
                        </Link>


                    </div>

                </div>

            </div>
        </div>
      </nav>
    </div>
  )
}


