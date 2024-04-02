"use client"
import React, {useState } from 'react'
import  './mobilemenu.css'
import { CgMenuLeft } from "react-icons/cg";
import { motion } from 'framer-motion'
import { TbLogout } from "react-icons/tb";
import { usePathname } from 'next/navigation';


import Link from 'next/link'
import { logout }  from '@/app/lib/actions'
import { RxDashboard } from 'react-icons/rx'
import { 
  MdPayments, 
  MdOutlinePayment, 
  MdWorkHistory, 
  MdSettings, 
  MdOutlineSupportAgent, 
  MdAddChart 
} from 'react-icons/md' 
import { LuUserCircle2 } from "react-icons/lu";
import { BiTransferAlt } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import Image from 'next/image';




const AdminItems = [
    {
      title: "Dashboard",
      path: '/dashboard',
      icon: <RxDashboard size={20}/>
    },
    {
      title: "Virtual Cards",
      path: '/dashboard/cards',
      icon: <MdAddChart size={20}/>
    },
    {
      title: "Manage Users",
      path: '/dashboard/users',
      icon: <LuUserCircle2 size={20}/>
    },
    {
      title: "Loans",
      path: '/dashboard/loans',
      icon: <MdPayments size={20}/>
    },
    {
      title: "Transactions",
      path: '/dashboard/transactions',
      icon: <MdOutlinePayment size={20}/>
    },
    {
      title: "Settings",
      path: '/dashboard/settings',
      icon: <MdSettings size={20}/>
    },
  ]

const MobileMenu = ({session}) => {

    const UserItems = [
        {
          title: "Dashboard",
          path: '/dashboard',
          icon: <RxDashboard size={20}/>
        },
        {
          title: "Transactions",
          path: '/dashboard/history',
          icon: <MdWorkHistory size={20}/>
        },
        {
          title: "Virtual Cards",
          path: '/dashboard/cards',
          icon: <MdPayments size={20}/>
        },
        {
          title: "Deposit",
          path: '/dashboard/deposit',
          icon: <GrMoney size={20}/>,
        },
      
        {
          title: "Transfers",
          path: '/dashboard/transfer',
          icon: <BiTransferAlt size={20}/>
        },
        {
          title: "Help/Support",
          path: '/dashboard/support',
          icon: <MdOutlineSupportAgent size={20}/>
        },
        {
          title: "Settings",
          path: '/dashboard/settings',
          icon: <MdSettings size={20}/>
        },
      
      ]

    const [toggle, setToggle] = useState(false)

    const pathname = usePathname();
    const role = session.user.role;


  return (
    <>
        <CgMenuLeft className='menubtn' onClick={() => {setToggle(true)}}/>
        { toggle && (
              <motion.div 
                onClick={() => {setToggle(false)}}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, ease:'linear'}}
                variants={{
                  visible: { opacity:1, x:0 },
                  hidden: { opacity: 0 , x: -50}
                }}
                className='fixed flex flex-col p-10 h-full z-10 inset-0 overflow-auto bg-[--backdrop] backdrop-blur-md'
              >

              <div className='w-full flex justify-center items-center p-3 bg-[--secondary] rounded-lg mb-5'>
                <Image src='/favicon.png' width={30} height={20} className='object-cover'/>
              </div>
          
          { role === "admin"  ? 
            AdminItems.map((item) => (
              <Link href={item.path} className={`menu ${pathname === item.path && 'active'}`} key={item.title}>
              <div className='menuItems' >
                {item.icon}
                {item.title}
                
              </div>
            </Link>
            )):
            UserItems.map((item) => (
              <Link href={item.path} className={`menu ${pathname === item.path && 'active'}`} key={item.title}>
              <div className='menuItems'>
                {item.icon}
                {item.title}
              </div>
            </Link>
            ))}
            <div onClick={() => {logout()}}>
              <button className='flex items-center justify-start gap-5 pl-5 mt-5 '>
                <TbLogout size={20}/>
                <div>Logout</div>
              </button>
            </div>
            
          </motion.div>
          )}
    </>
  )
}

export default MobileMenu