"use server";
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import Footer from '@/app/ui/dashboard/footer/page'
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import styles from '@/app/ui/dashboard/dashboard.module.css'
import { Suspense } from 'react'
import LoadingCard from '@/app/ui/loading/loadingCard'



const Main = async ({ admins, users }) => {


const session = await auth();
//console.log("this is session:", session);

    return (
      <div className={styles.container}>
          <div className={styles.menu}>
              <Sidebar/>
          </div>
          
          <div className={styles.content}>
          <div className={styles.mediaquery}>
          <Navbar/>
          </div>
              
              
              <div className='relative'>
              <Suspense fallback={<LoadingCard/>}>{session.user.role === "admin" ? admins : users  }</Suspense>
              <Footer/>
              </div>
          </div>
      </div>
    )
  }
export default Main