import React from 'react'
import styles from '../transfer.module.css'

const LocalTransfer = () => {
  

  return (
    <div className={styles.international}>
      <div>
      <span className='font-bold text-lg'>Local Transfer</span>
      <p>Funds will reflect in the Beneficiary Account within 24hours</p>
      </div>

      <div className='w-full gap-5 flex flex-col'>
          <div className={styles.item}>
          <span className='font-bold text-[14px] md:text-[16px]'>Account Name:</span>
          <input type="text" name='account_name' required className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold text-[14px] md:text-[16px]'>Account Number:</span>
          <input type="number" name='account_number' required className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold text-[14px] md:text-[16px]'>Bank Name:</span>
          <input type="text" name='bank_name' required className={styles.input}/>
        </div>
        <div className={styles.item}>
          <span className='font-bold text-[14px] md:text-[16px]'>Remarks:</span>
          <textarea type="text" name='remarks' className={styles.input} row={100}/>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default LocalTransfer