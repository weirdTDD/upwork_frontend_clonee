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
    sendEmails: boolean
    agreeTerms?: boolean;
}




const Page: React.FC = () => {

   const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
        sendEmails: false,
        agreeTerms: false
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked :value;

        setFormData((prev) =>({
            ...prev,
            [name]: newValue,
        }));
   };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.agreeTerms){
        alert("You must agree to the terms and conditions.")
    }

    if(!formData.email || !formData.password || !formData.firstName || !formData.lastName ||!formData.country){
        alert("Please fill in all required fields")
    }
    // Handle form submission logic here
    console.log("Form submitted", formData)
   }



  return (
    <div> 
            
        <div className="min-h-screen bg-white">
            <div className="absolute w-full">
                 <Navbar />
            </div>

            <div className="py-20 max-w-3xl mx-auto px-4">
               

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
                            className= "bg-blue-500 flex items-center gap-6 justify-between border-none px-1 py-1 rounded-3xl font-normal hover:scale-105 transition-transform"
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

                    <div className="flex items-center w-full max-w-lg mx-auto my-4">
                        <div  className="grow border-t border-gray-200"  />
                            <span className="shrink mx-4 text-gray-800 font-medium">
                                or
                            </span>
                        <div  className="grow border-t border-gray-200" />
                    </div>  

                </div>
                <div className="mt-8 flex items-center justify-center  text-gray-800 font-medium ">

                    <form action="">
                        <div className="flex items-center justify-between mx-auto gap-4 w-full px-16">
                            <div>
                              <label htmlFor="text">First name</label>
                              <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange}  className='w-full py-3 px-6 border border-gray-500 rounded-xl  hover:ring-blue-700' />  
                            </div>
                            <div>
                              <label htmlFor="text">Last name</label>
                              <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange}  className='w-full py-3 px-6 border border-gray-500 rounded-xl  hover:ring-blue-700' />  
                            </div>
                            
                            
                        </div>
                        <div className="mt-8 flex flex-col mx-auto w-full px-16 ">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder='iamleonard@gmail.com' 
                                value={formData.email} 
                                onChange={handleChange}  
                                className='w-full py-3 px-6 border border-gray-500 rounded-xl hover:ring-blue-700 mb-8'
                            />

                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength={8}
                                className='w-full py-3 px-6 border border-gray-500 rounded-xl  hover:ring-blue-700 mb-8'
                            />

                            <div className="mb-8 w-full">

                                <label htmlFor="country" id="">Country</label>
                                <select 
                                    name="country" 
                                    value={formData.country}
                                    required
                                    onChange={handleChange}
                                    className='w-full py-3 px-6 border border-gray-500 rounded-xl  hover:ring-blue-700 mb-8'
                                    >
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="China">China</option>
                                        

                                </select>
                            </div>

                            <div className="mb-8 w-full">
                                <label>
                                    <input 
                                        type="checkbox"
                                        name="sendEmails"
                                        checked={formData.sendEmails}
                                        onChange={handleChange} 
                                    />
                                    Send me helpful emails to find rewarding work and job leads.
                                </label>
                            </div>
                            

                            <div className="mb-8 w-full">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        required 
                                    />
                                    Yes, I understand and agree to the Upwork Terms of Service including the User Agreement and Privacy Policy
                                </label>

                            </div>

 
                        </div>
                        <div className="flex flex-col items-center justify-center">

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 mb-8 rounded-xl hover:scale-105 transition-transform"
                            >
                                Create my account
                            </button>
                            
                            <p>Already have an account?<a href="" className="text-green-600">Log in</a></p>
                        </div>

                    </form>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Page
