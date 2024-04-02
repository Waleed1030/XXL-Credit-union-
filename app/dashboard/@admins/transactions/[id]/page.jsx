"use server"
import { updateTransaction } from "@/app/lib/actions";
import { fetchTransactionData } from "@/app/lib/data";
import styles from "@/app/dashboard/@admins/transactions/[id]/viewTransaction.module.css";
import Image from "next/image";
import toast from 'react-hot-toast'


const SingleTransactionPage = async ({ params }) => {
  
  const { id } = params;
  //console.log("logging from inside the component:", id)
  const { transaction } = await fetchTransactionData(id);
  //console.log("logging from inside the component:", transaction)


  return (
    <div className={styles.container}>

      <div className={styles.formContainer}>
        <form action={updateTransaction} 
        
        className={styles.form}>
          <input type="hidden" name="id" value={transaction.id}/>

          <div className={styles.item}>
            <label>Username</label>
            <input type="text" name="username" placeholder={transaction.username} />
          </div>

          <div className={styles.item}>
            <label> Transaction Type</label>
            <input type="text" name="type" placeholder={transaction.type} />
          </div>

          <div className={styles.item}>
            <label>Deposit Type</label>
            <input type="text" name="depositType" placeholder={transaction.depositType} />
          </div>

          <div className={styles.item}>
            <label>Currency</label>
            <input type="text" name="currency" placeholder={transaction.currency} />
          </div>

          <div className={styles.item}>
            <label>Network</label>
            <input type="text" name="network" placeholder={transaction.network} />
          </div>

          <div className={styles.item}>
            <label>Status</label>
            <input type="text" name="status" placeholder={transaction.status} />
          </div>

          <div className={styles.item}>
            <label>Email</label>
            <input type="text" name="email" placeholder={transaction.email} />
          </div>

          <div className={styles.item}>
            <label>Amount</label>
            <input type="text" name="amount" placeholder={transaction.amount} />
          </div>

          <div className={styles.item}>
            <label>Date</label>
            <input type="text" name="newDate" placeholder={transaction.createdAt?.toString().slice(4, 16)} />
            <label>Enter in this format: YYYY-MM-DD</label>
          </div>

          <div className={styles.item}>
            <label>Receiver Account Number</label>
            <input type="text" name="account_number" placeholder={transaction.account_number} />
          </div>

          <div className={styles.item}>
            <label>Receiver Account Name</label>
            <input type="text" name="account_name" placeholder={transaction.account_name} />
          </div>

          <div className={styles.item}>
            <label>Swift code</label>
            <input type="text" name="swift" placeholder={transaction.swift} />
          </div>

          <div className={styles.item}>
            <label>Routing Number</label>
            <input type="text" name="routing_number" placeholder={transaction.routing_number} />
          </div>

          <div className={styles.item}>
            <label>Bank Name</label>
            <input type="text" name="bank_name" placeholder={transaction.bank_name} />
          </div>

          <div className={styles.item}>
            <label>remarks</label>
            <input type="text" name="remarks" placeholder={transaction.remarks} />
          </div>

        

          <button className="primary_btn">Update Fields</button>
        </form>
      </div>
    </div>
  );
};

export default SingleTransactionPage;