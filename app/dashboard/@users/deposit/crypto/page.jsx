"use client"
import styles from './crypto.module.css'

const CryptoDeposit =  ({amount}) => {



  return (
    <div className={styles.container}>

      <div className={styles.title}>
          MAKE PAYMENT
      </div>
    
      <div className={styles.inputbox}>

        <div className={styles.title}>
            Please payment to the Address Below:
            <p className={styles.wallet}>
            0xa935bb2d8ecfb31a6807d0a23bbe355f901fb12a
            </p>

            <p className={styles.wallet}>Make sure your email address is correct!</p>
        </div>

        <div className={styles.flexBox}>
            <div className={styles.flexItem}>
                <p>Amount:</p>
                <p>{amount}</p>
            </div>

            <div className={styles.flexItem}>
                <p>Username:</p>
                <input type="text" name='username'/>
            </div>

            <div className={styles.flexItem}>
                <p>Your Email:</p>
                <input type="email" name='email' />
            </div>

            <div className={styles.flexItem}>
                <p>Currency:</p>
                <input type="text"  name='currency'/>
            </div>

            <div className={styles.flexItem}>
                <p>Network Type:</p>
                <input type="text" name='network' />
            </div>
        </div>

        <div className={styles.amount}>
          <p >Please Enter Your Wallet Address.</p>
          <input type="text" name='address' className={styles.input}/>
        </div>
          
      </div>

    </div>
  )
}

export default CryptoDeposit