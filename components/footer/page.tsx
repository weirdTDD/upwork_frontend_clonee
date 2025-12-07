
import Link from 'next/link'
import { BsApple } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { IoLogoAndroid } from 'react-icons/io'
import { RiLinkedinFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='bg-black/90 py-8 mx-5 rounded-t-lg  text-sm text-gray-300 font-semibold'>
        <div className='w-full  mx-auto px-6 lg:px-12 mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 '>
                <div>
                    <ul className='flex flex-col items-start space-y-2'>
                        <Link href="/" className='hover:text-white'>About Us</Link>
                        <Link href="/" className='hover:text-white'>Feedback</Link>
                        <Link href="/" className='hover:text-white'>Trust, Safety & Security</Link>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col items-start space-y-2'>
                        <Link href="/" className='hover:text-white'>Help & Support</Link>
                        <Link href="/" className='hover:text-white'>Upwork Foundation</Link>
                        <Link href="/" className='hover:text-white'>Terms of Service</Link>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col items-start space-y-2'>
                        <Link href="/" className='hover:text-white'>Privacy Policy</Link>
                        <Link href="/" className='hover:text-white'>CA Notice at Collection</Link>
                        <Link href="/" className='hover:text-white'>Cookie Settings</Link>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col items-start space-y-2'>
                        <Link href="/" className='hover:text-white'>Accessibility</Link>
                        <Link href="/" className='hover:text-white'>Desktop</Link>
                        <Link href="/" className='hover:text-white'>Cookie Policy</Link>
                        <Link href="/" className='hover:text-white'>Enterprise Solutions</Link>
                    </ul>
                </div>

                

                

            </div>

            <div className=' '>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 items-center justify-between  mx-auto mt-8 pt-6 text-center text-gray-400'>
                    <div className='flex items-center  space-x-8  mt-4 md:mt-0 '>
                        <p>Follow Us</p>
                        <Link href="/"><FaFacebook strokeWidth={0.5} className='w-7 h-7 p-0.5 text-gray-800 fill-gray-300 rounded-full bg-gray-900' /></Link>
                        <Link href="/"><RiLinkedinFill strokeWidth={0.5} className='w-7 h-7 p-0.5 text-gray-800 fill-gray-900 rounded-sm bg-gray-300'/></Link>
                        <Link href="/"><FaXTwitter strokeWidth={0.5} className='w-7 h-7 p-0.5 text-gray-800 fill-gray-300 rounded-md bg-none'/></Link>
                        <Link href="/"><FaYoutube strokeWidth={2} className='w-7 h-7 text-gray-800  fill-gray-300  rounded-md  bg-none' /></Link>
                        <Link href="/"><FaInstagram strokeWidth={2} className='w-7 h-7 text-gray-800  fill-gray-300  rounded-md bg-none' /></Link>
                    </div>
                    <div className='flex items-center justify-start md:justify-end space-x-6 mt-6 md:mt-0 '>
                        <p>Mobile app</p>
                        <Link href="/"><BsApple strokeWidth={0.5} className='w-7 h-7 p-0.5 text-gray-800 fill-gray-200 rounded-full bg-none' /></Link>
                        <Link href="/"><IoLogoAndroid strokeWidth={0.5} className='w-7 h-7 p-0.5 text-gray-800 fill-gray-200 rounded-full bg-none' /></Link>
                    </div>

                </div>
                <div className='w-full border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 font-semibold'>
                    <p>&copy; 2015-2025 Upwork &reg; Global Inc.</p>
                </div>
            </div>

            
        </div>
      
    </footer>
  )
}

export default Footer
