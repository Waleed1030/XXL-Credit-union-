import React from 'react'
import { fetchUsers } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/actions'

import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/searchbar/search' 
import styles from './users.module.css'

import Link from "next/link";
import Image from 'next/image'


const UsersPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count, users } = await fetchUsers(q, page);
    

  return (
    <div className={styles.container}>
      <span className={styles.title}>Users</span>
      <div className={styles.box}>
        
        <div className={styles.referrals}>
          <div className={styles.headtext}>
            <span>Manage Users</span>
            <Link href="/dashboard/users/add">
            <button className={styles.add_btn}>Add User</button>
            </Link>
            
          </div>
          <Search placeholder="Search for user..."/>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Client Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>Date Registered</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
              <tr key={user.firstname}>
                <td>
                  <div className={styles.user}>
                    <Image 
                    className={styles.userImage} 
                    src={user.img || ""}
                    alt="" 
                    width={40} 
                    height={40}
                    />

                    <span>{user.firstname}</span>
                    <span>{user.lastname}</span>
                  </div>
                </td>

                <td>
                  {user.username}
                </td>

                <td>
                  {user.email}
                </td>
                <td>
                  {user.createdAt?.toString().slice(4, 16)}
                </td>

                <td>{user.role === 'admin' ? "Admin" : "Client"}</td>

                <td className={styles.actions}>
                <Link href={`/dashboard/users/${user.username}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>


                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </td>

              </tr>
              ))}
            </tbody>
          </table>
          <Pagination count={count}/>
        </div>
      </div>
    </div>
  )
}

export default UsersPage





