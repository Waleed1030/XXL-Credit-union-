import React from 'react'
import { fetchCards } from '@/app/lib/data'
import { deleteCard } from '@/app/lib/actions'

import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/searchbar/search' 
import Status from '@/app/ui/dashboard/status/status'
import styles from './cards.module.css'

import Link from "next/link";


const Cards = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count, cards } = await fetchCards(q, page);


  return (
    <div className={styles.container}>
      <span className={styles.title}>Cards</span>
      <div className={styles.box}>
        
        <div className={styles.referrals}>
          <div className={styles.headtext}>
            <span>Manage Cards</span>
          </div>

          <Search placeholder="Search for user cards..."/>
          <table className={styles.table}>
            <thead>
              <tr className='font-bold bg-[--bgSoft]'>
                <td>Username</td>
                <td>Card Name</td>
                <td>Number</td>
                <td>Status</td>
                <td>Expiry</td>
                <td>Date</td>
                <td>CVC</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cards?.map((card) => (
              <tr key={card.username}>
                <td>
                    {card.username}
                </td>

                <td>
                  {card.name}
                </td>

                <td>
                {card.number}
                </td>
                <td>
                  <Status status={card.status}/>
                </td>
                <td>
                  {card.expiry}
                </td>
                
                <td>
                  {card.createdAt?.toString().slice(4, 16)}
                </td>

                <td>{card.cvc}</td>
                

                <td className={styles.actions}>
                <Link href={`/dashboard/cards/${card.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                </Link>


                  <form action={deleteCard}>
                    <input type="hidden" name="id" value={(card.id)} />
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

export default Cards





