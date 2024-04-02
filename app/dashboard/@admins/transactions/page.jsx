import React from 'react';
import { fetchTransactions } from '@/app/lib/data';
import { deleteTransaction } from '@/app/lib/actions';

import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/searchbar/search';
import Status from '@/app/ui/dashboard/status/status';
import styles from './transactions.module.css';

import Link from "next/link";

const Transactions = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count, transactions } = await fetchTransactions(q, page);
 

  return (
    <div className={styles.container}>
      <span className={styles.title}>Transactions</span>
      <div className={styles.box}>
        
        <div className={styles.referrals}>
          <div className={styles.headtext}>
            <span>Manage Transactions</span>
          </div>

          <Search placeholder="Search for user..."/>
          <table className={styles.table}>
            <thead>
              <tr className='font-bold bg-[--bgSoft]'>
                <td>Username</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Status</td>
                <td>Date</td>
                <td>Transaction Type</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {transactions.sort((a, b) => parseFloat(b.createdAt) - parseFloat(a.createdAt)).map((transaction) => ( 
              <tr key={transaction.username}>
                <td>
                    {transaction.username}
                </td>

                <td>
                  {transaction.type}
                </td>

                <td>
                ${transaction.amount}
                </td>
                <td>
                  <Status status={transaction.status}/>
                </td>
                <td>
                  {transaction.createdAt?.toString().slice(4, 16)}
                </td>

                <td>{transaction.depositType}</td>

                <td className={styles.actions}>
                <Link href={`/dashboard/transactions/${transaction.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>


                  <form action={deleteTransaction}>
                    <input type="hidden" name="id" value={(transaction.id)} />
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

export default Transactions





