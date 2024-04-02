import React from 'react'
import styles from '../transfer.module.css'

const InternationalTransfer = () => {
  return (
    <div className={styles.international}>
      <div>
      <span className='font-bold text-lg'>International Transfer</span>
      <p>Funds will reflect in the Beneficiary Account within 2-3 days</p>
      </div>

      <div className='w-full gap-5 flex flex-col'>
          <div className={styles.item}>
          <span className='font-bold'>Account Name:</span>
          <input type="text" name='account_name' className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold'>Account Number:</span>
          <input type="number" name='account_number' className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold'>Bank Name:</span>
          <input type="text" name='bank_name' className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold'>Swift Code:</span>
          <input type="text" name='swift' className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold'>Routing Number:</span>
          <input type="text" name='routing_number' className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold'>Remarks:</span>
          <textarea type="text" name='remarks' className={styles.input} row={100}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default InternationalTransfer