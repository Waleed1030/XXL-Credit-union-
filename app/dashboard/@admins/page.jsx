"use server"
import styles from './admindash.module.css'
import { MdOutlineWorkHistory } from "react-icons/md";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi"
import TransactComponent from '@/app/ui/dashboard/transact/page'
import { fetchStats } from '@/app/lib/data';

const AdminDashboard = async () => {

  const { user_count, total_balance, transaction_count  } = await fetchStats();



  const balances = [
    {
      title: "Total Users",
      amount: user_count,
      icon: <GiPayMoney size={60}/>
    },
    {
      title: "Total Liquidity",
      amount: `$${total_balance}` ,
      icon: <GiReceiveMoney size={60}/>
    },
    {
      title: "Total Transactions",
      amount: `${transaction_count}`,
      icon: <MdOutlineWorkHistory size={60}/>
    },
  ]

  
  
  return (
      <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.title}>
          DASHBOARD
        </div>

        <div>
          <p>Welcome, Admin!</p>
        </div>
      </div>

      <div className={styles.firstrow}>

        {balances.map((item)=> (
          <div className={styles.card}>
              <div className={styles.textbox}>
              <p>{item.title}</p>
              <span className={styles.amount}>{item.amount}</span>
              </div>
              < div className={styles.icon}>{item.icon}</div>
          </div>
        ))}
      </div>

      
     <div className={styles.actions}>
      <TransactComponent/>
     </div>
      
    </div>
    )
}

export default AdminDashboard