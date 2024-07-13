import { auth, signOut } from '@/app/api/auth/[...nextauth]/auth'
import { TbLogout } from "react-icons/tb";




import React from 'react'
import Link from 'next/link'
import styles from './sidebar.module.css'
import Navbar from '../navbar/navbar';
import MobileMenu from './mobilemenu'
import { logout } from '@/app/lib/actions'



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


const Sidebar = async () => {

  const session = await auth()
  
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

  

  return (
    <>
    <div className={styles.container}>

      <div className='w-full flex justify-center items-center p-3 bg-[--secondary] rounded-lg'>
          <Image src='/favicon.png' width={60} height={40} className='object-cover'/>
      </div>
     
     {session.user.role === "admin" ? 
      AdminItems.map((item) => (
        <Link href={item.path} className={styles.menu} key={item.title}>
        <div className={styles.menuItems} >
          {item.icon}
          {item.title}
          
        </div>
      </Link>
      )):
      UserItems.map((item) => (
        <Link href={item.path} className={styles.menu} key={item.title}>
        <div className={styles.menuItems}>
          {item.icon}
          {item.title}
        </div>
      </Link>
      ))}

      <form action={ async () => {
        "use server"

        await signOut();
        redirect("/login");

        }}>

        <button className='flex items-center justify-start gap-5 pl-5 mt-5'>
          <TbLogout size={20}/>
          <div>Logout</div>
        </button>
      </form>
    </div>

    <div className={styles.mobilemenu}>
      <MobileMenu session={session}/>
      <Navbar/>
    </div>

    </>
  )
}

export default Sidebar