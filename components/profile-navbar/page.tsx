import { Calendar1Icon, CircleEllipsisIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BiNotification, BiQuestionMark } from 'react-icons/bi'
import { FcTodoList } from 'react-icons/fc'
import { GrFormSchedule } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { IoAlert } from 'react-icons/io5'

interface NavItem  {
  label: string;
  link?: string;
  children?: NavItem[];
  icon?: React.ComponentType<{ className?: string |undefined }>;
};

const navItems: NavItem [] = [
  {
    label:"Features",
    link:"",
    children:[
      {
        label:"Todo list",
        link:"#",
        icon:FcTodoList,
      },{
        label:"Calendar",
        link:"#",
        icon:Calendar1Icon,
      },{
        label:"Reminders",
        link:"#",
        icon: IoAlert,
      },{
        label:"Planning",
        link:"#",
        icon: GrFormSchedule,
      },
    ],

    icon: IoAlert,

  },
  {
    label:"Company",
    link:"",
    children:[
      {
        label:"Todo list",
        link:"#",

      },{
        label:"Calendar",
        link:"#",

      },{
        label:"Reminders",
        link:"#",

      },{
        label:"Planning",
        link:"#",
      },
    ],

    icon: IoAlert,
  }
]

const Navbar = () => {
  return (
  <div>
    <nav className='shadow-sm fixed w-full bg-white z-10 mb-10 hidden md:block'>
      <div className='w-full'>

        <div className='flex items-center justify-between h-20 w-full mx-6'>
          {/* 1st Block */}
          <div className="flex items-center mr-20 gap-10">
            <Image
              src= "https://seekvectors.com/storage/images/Upwork-01.svg"
              alt=''
              className="w-50 h-20 object-contain -ml-6"
              width={1200}
              height={400}
            />

            <div className='flex items-center gap-4 transition-all '>
              {navItems.map((d, i) => (
                <Link key={i} 
                  href ={d.link ?? "#"} 
                  className='relative group px-2 py-3 transition-all'>
                  <p className='flex items-center gap-2 cursor-pointer text-gray-700 grouop-hover:text-black '>
                    <span>{d.label}</span>
                    <IoIosArrowDown className='rotate-180 group-hover:rotate-0 transition-all'/>
                  </p>
                  {/* Dropdown */}
                  {d.children &&(
                    <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-xl bg-gray-100 shadow-lg transition-all group-hover:flex px-5 py-3'>
                      {d.children.map(({ label, link, icon }) => {
                        const Icon = icon;
                        return(
                        <Link key={i} href={link ?? "#"} className='flex gap-2 cursor-pointer items-center py-1 pl-6 pr-8  text-gray-600  hover:text-black' >
                          {Icon &&(
                            <Icon  className='text-blue-800 font-bold'/> 
                          )}
                          {label}
                        </Link>
                        )
                      }
                      )}
                    </div>
                  )}
                </Link>
              ))}
            </div>


          </div>

          <div className='hidden md:block'>
            <div className='mr-10 flex items-center space-x-5'>

              {/*Search Bar*/}
              <div className="flex items-center justify-around bg-gray-100 px-3 py-2 rounded-md border border-gray-300 hover:border-b-2 hover:border-green-500 shadow-lg">
                <Search className="w-5 h-5 text-gray-500 " />
                  <input
                    id='search'
                    type="text"
                    placeholder="Search"
                    className="bg-transparent ml-2  outline-none "
                  />
                  <div className='flex items-center  gap-4'>
                    <span>|</span>
                    <p className=''>Jobs</p>
                  </div>
                  
              </div>

              <BiQuestionMark className='w-7 h-7 '/>

              <BiNotification className='w-7 h-7 '/>

              <CircleEllipsisIcon />

              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              
                

            </div>

          </div>

        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
