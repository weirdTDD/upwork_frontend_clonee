import { Calendar1Icon, CircleEllipsisIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BiNotification, BiQuestionMark } from 'react-icons/bi'
import { FcTodoList } from 'react-icons/fc'
import { GrFormSchedule } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { IoAlert } from 'react-icons/io5'

interface NavItem  {
  id: number;
  label: string;
  link?: string;
  children?: NavItem[];
  icon?: React.ComponentType<{ className?: string |undefined }>;
};

const navItems: NavItem [] = [
  { 
    id: 1,
    label:"Find Work",
    link:"",
    children:[
      {
        label: "Development & tech jobs",
        link: "#",
        icon: FcTodoList,
        id: 0
      },{
        label:"Ui/Ux Design & creative",
        link:"#",
        icon:Calendar1Icon,
        id: 1
      },{
        label:"Marketing jobs",
        link:"#",
        icon: IoAlert,
        id: 2
      },{
        label:"Admin & support jobs",
        link:"#",
        icon: GrFormSchedule,
        id: 3
      },
    ],

    icon: IoAlert,

  },
  {
    id: 2,
    label:"Deliver work",
    link:"",
    children:[
      {
        label:"Web Developer",
        link:"#",
        id: 4

      },{
        label:"Ui/Ux Designer",
        link:"#",
        id: 5

      },{
        label:"Copy Writers",
        link:"#",
        id: 6

      },{
        label:"Virtual Assistants",
        link:"#",
        id: 7
      },
    ],

    icon: IoAlert,
  },{
    id: 3,
    label:"Manage finances",
    link:"",
    children:[
      {
        label:"Inventory Mangement",
        link:"#",
        id: 44

      },{
        label:"HRM Tools",
        link:"#",
        id: 55

      },{
        label:"Invoice Generators",
        link:"#",
        id: 66

      },{
        label:"Uma AI Scheduling",
        link:"#",
        id: 77
      },
    ],

    icon: IoAlert,
  }
]

const Navbar = () => {
  return (
  <div>
    <nav className='shadow-sm fixed w-full bg-white/90 z-10 mb-10 hidden md:block'>
      <div className='w-full'>

        <div className='flex items-center justify-between h-20 w-full mx-6'>
          {/* 1st Block */}
          <div className="flex items-center mr-20 gap-10">
            <Image
              src= "https://seekvectors.com/storage/images/Upwork-01.svg"
              alt='upwork logo'
              className="w-50 h-20 object-contain -ml-6"
              width={1200}
              height={400}
            />

          <div className='flex items-center gap-4 transition-all'>
              {navItems.map((item) => (
                <div key={item.id} className="relative group px-2 py-3">

                  {/* TOP-LEVEL BUTTON */}
                  <div className="flex items-center gap-2 cursor-pointer text-gray-700 group-hover:text-black">
                    <span>{item.label}</span>
                    <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all" />
                  </div>

                  {/* DROPDOWN */}
                  {item.children && (
                    <div className="absolute left-[-18]  top-10 min-w-90  hidden group-hover:flex flex-col gap-1 rounded-xl bg-white shadow-lg px-3 py-3">

                      {item.children.map((child) => {
                        const Icon = child.icon;

                        return (
                          <Link
                            key={child.id}
                            href={child.link ?? "#"}
                            className="flex gap-2 items-center py-1 pl-6 pr-8 text-gray-600 hover:text-green-500 hover:scale-105 transition-transform"
                          >
                            {Icon && <Icon className="text-blue-800 font-bold" />}
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                </div>
              ))}
            </div>

            <Link href="" className='text-gray-600 hover:text-green-600 '>Messages</Link>



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

              <div className="w-10 h-10 bg-red-300 rounded-full text-center "><p className="mt-2 font-bold text-white">SL</p></div>
              
                

            </div>

          </div>

        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
