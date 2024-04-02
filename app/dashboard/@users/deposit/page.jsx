"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { deposit } from '@/app/lib/actions'
import styles from './deposit.module.css'
import BankDeposit from './bank/page'
import CryptoDeposit from './crypto/page'
import ChequeDeposit from './cheque/page'


import { RiBankLine } from "react-icons/ri";
import { FaMoneyCheckDollar, FaBitcoin } from 'react-icons/fa6';

const Deposit = () => {

  const pathname = usePathname()
  const [depositType, setDepositType] = useState("");
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("Deposit")
  const [status, setStatus] = useState("pending")

  return (
    <div className={styles.container}>

      <div className={styles.title}>
          FUND YOUR ACCOUNT
      </div>
    
    <div className={styles.boxContainer}>

      <form action={deposit} className={styles.inputbox}>
              <div className={styles.amount}>
                <p>Enter Amount</p>
                <input type="number" name="amount"  className={styles.input} onChange={(e) => setAmount(e.target.value)}/>
              </div>

              <div className={styles.title}>
                  Choose Deposit Type:
              </div>

              <div className={styles.currency}>
                <div className={styles.box} onClick={() => setDepositType("bank")}>
                  <div className={styles.logo}><RiBankLine size={20}/></div>
                  <p>Bank Deposit</p>
                </div>


                <div className={styles.box} onClick={() => setDepositType("crypto")}>
                  <div className={styles.logo}><FaBitcoin size={20}/></div>
                  <p>Crypto Deposit</p>
                </div>
                <div className={styles.box} onClick={() => setDepositType("cheque")}>
                  <div className={styles.logo}><FaMoneyCheckDollar size={20}/></div>
                  <p>Cheque Deposit</p>
                </div>  
                
                <input type="text" name="depositType" value={depositType} hidden/>
                <input type="text" name="type" value={type} hidden/> 
                <input type="text" name="status" value={status} hidden/> 

              </div>

              <div>
              {depositType === 'bank'? <BankDeposit amount={amount}/> :
              depositType === 'crypto'? <CryptoDeposit amount={amount}/> :
              depositType === 'cheque'? <ChequeDeposit amount={amount}/> : null}
              </div>
              <button className={styles.btn}>Proceed</button>   
      </form>
    </div>
      

    </div>
  )
}

export default Deposit