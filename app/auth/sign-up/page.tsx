"use client"

import { Navbar } from "@/components/sign-up-navbar/page"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
}




const Page: React.FC = () => {

   const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked :value;

        setFormData((prev) =>({
            ...prev,
            [name]: newValue,
        }));
   };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData)
   }



  return (
    <div> 
            
        <div className="min-h-screen bg-white">
            <div className="absolute w-full">
                 <Navbar />
            </div>

            <div className="py-20 max-w-3xl mx-auto">
               

                <div className="flex flex-col items-center gap-8 mt-16">
                    <h2 className="text-4xl font-semibold mb-4">Sign up to find work you love</h2>

                    <div className=" flex items-center gap-6">
                        <Link  href=""
                            className= "flex items-center gap-6 border-2 border-gray-600 px-12 py-2 rounded-3xl font-normal hover:scale-105 transition-transform"
                        >
                            <Image
                             src="https://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19683.png"
                             alt=""
                             width={15}
                             height={15}
                             className="inline-block"
                            
                            />

                            Continue with Apple
                        
                        </Link>

                        <Link  href=""
                            className= "bg-blue-500 flex items-center gap-6 justify-between border-2 border-gray-600 px-0.5 py-1 rounded-3xl font-normal hover:scale-105 transition-transform"
                        >
                            <Image
                             src="https://cdn.iconscout.com/icon/free/png-256/free-google-icon-svg-download-png-1912023.png?f=webp&w=128"
                             alt=""
                             width={35}
                             height={35}
                             className=" rounded-full inline-block"
                            
                            />

                            <p className="px-8 text-white">Continue with Google</p>
                        
                        </Link>

                        

                    </div>

                    <hr className="border border-gray-200 backdrop-blur-2xl w-full mx-auto px-16" />

                </div>
                <div>

                    <form action="">
                        <div className="flex grid-cols-2 items-center mx-auto gap-4">
                            <div>
                              <label htmlFor="text">First name</label>
                              <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange}  className='w-full p-3 border rounded-md focus:ring-2 hover:ring-blue-700' />  
                            </div>
                            <div>
                              <label htmlFor="text">Last name</label>
                              <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange}  className='w-full p-3 border rounded-md focus:ring-2 hover:ring-blue-700' />  
                            </div>
                            
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Page
