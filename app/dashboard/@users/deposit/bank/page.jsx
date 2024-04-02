"use client"
import { usePathname } from 'next/navigation'
import styles from './bank.module.css'

const BankDeposit = () => {

  const pathname = usePathname()
  return (
    <div className={styles.container}>

      <div className={styles.title}>
          MAKE PAYMENT
      </div>
    
      <div className={styles.inputbox}>
        bank
      </div>

    </div>
  )
}

export default BankDeposit