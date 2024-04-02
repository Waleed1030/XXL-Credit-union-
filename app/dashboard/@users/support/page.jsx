import styles from './support.module.css'

const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.info}>
          <p className={styles.company}>Blue Pheonix Bank Support</p>
          <p className='text-sm'>For inquiries, suggestions or complains. Mail us</p>
          <a href="#" className={styles.link}>support@bluepheonixbank.com</a>
        </div>
        <div className={styles.messageBox}>
          <p>Message*</p>
          <form className={styles.form} action="">
          <textarea className={styles.textarea} name="" id="" cols="60" rows="20"></textarea>
          <div className={styles.btn}>Send</div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Support