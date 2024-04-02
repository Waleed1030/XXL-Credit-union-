import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from './history.module.css'
//import Search from '@/app/ui/dashboard/searchbar/search'
import { Cancelled, Processed, Pending, Suspended } from '@/app/ui/dashboard/status'   
import { fetchUserData } from '@/app/lib/data' 
import { auth } from '@/app/api/auth/[...nextauth]/auth'


const History = async ({placeholder}) => {

  const session = await auth()
  const username = session.user.username;
  const { user, history } = await fetchUserData(username);


  return (
    <div className={styles.container}>
      <span className={styles.title}>Transactions On Your Account</span>

      <div className={styles.box}>
        <div className={styles.referrals}>
          <span className={styles.headtext}>Transaction History</span>
          <div className={styles.table}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <td>Amount</td>
                    <td>Type</td>
                    <td>Currency</td>
                    <td>Status</td>
                    <td>Description</td>
                    <td>Date Created</td>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item)=>(
                    <tr >
                    <td>{user.currency}{item.amount}</td>
                    <td>{item.type}</td>
                    <td>{item.currency}</td>
                    <td>{item.status === 'pending' ? <Pending/> : 
                        item.status === 'processed' ? <Processed/> : <Cancelled/>}
                    </td>
                    <td>{item.remark}</td>
                    <td>{item.createdAt?.toString().slice(4, 16)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
          </div>
          
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default History