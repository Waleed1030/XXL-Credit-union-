"use server"
import { updateCard } from "@/app/lib/actions";
import { fetchCardData } from "@/app/lib/data";
import styles from "@/app/dashboard/@admins/cards/[id]/viewCard.module.css";



const SingleCardPage = async ({ params }) => {
  
  const { id } = params;
  const { card } = await fetchCardData(id);
  //console.log("Logging card from ID:", card)


  return (
    <div className={styles.container}>

      <div className={styles.formContainer}>
        <form action={updateCard} 
        
        className={styles.form}>
          <input type="hidden" name="id" value={card.id} readOnly/>

          <div className={styles.item}>
            <label>Username</label>
            <input type="text" name="username" placeholder={card.username} />
          </div>

          <div className={styles.item}>
            <label> Owner's Name</label>
            <input type="text" name="name" placeholder={card.name} />
          </div>

          <div className={styles.item}>
            <label>Card Number</label>
            <input type="text" name="number" placeholder={card.number} />
          </div>

          <div className={styles.item}>
            <label>Card Status</label>
            <input type="text" name="status" placeholder={card.status} />
          </div>

          <div className={styles.item}>
            <label>Expiry</label>
            <input type="text" name="expiry" placeholder={card.expiry} />
          </div>

          <div className={styles.item}>
            <label>Date</label>
            <input type="text" name="date" placeholder={card.createdAt?.toString().slice(4, 16)} />
          </div>

          <div className={styles.item}>
            <label>CVC</label>
            <input type="text" name="cvc" placeholder={card.cvc} />
          </div>
                 
            <div className="button">
            <button className="primary_btn">Update Fields</button>
            </div>
          
        </form>
      </div>
    </div>
  );
};

export default SingleCardPage;