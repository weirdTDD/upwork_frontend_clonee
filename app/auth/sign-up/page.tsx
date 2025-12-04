import { Navbar } from "@/components/sign-up-navbar/page"
import Link from "next/link"


const page = () => {
  return (
    <div> 
            
        <div className="min-h-screen bg-white">
            <div className="absolute w-full">
                 <Navbar />
            </div>

            <div className="py-20">
               

                <div className="flex flex-col items-center gap-8 mt-32">
                    <h2>Sign up to find work you love</h2>

                    <div>
                        <Link  href=""
                            className= "border-2 border-gray-600 px-6 py-2 rounded-xl font-normal hover:scale-105 transition-transform"
                        >
                            Continue with Apple
                        
                        </Link>

                        <Link  href=""
                            className= "border-2 border-gray-600 px-6 py-2 rounded-xl font-normal hover:scale-105 transition-transform"
                        >
                            Continue with Google
                        
                        </Link>

                    </div>

                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default page
