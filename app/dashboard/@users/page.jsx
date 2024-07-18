import styles from "./userdash.module.css";
import { HiOutlineBanknotes, HiMiniBanknotes } from "react-icons/hi2";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { fetchUserData } from "@/app/lib/data.js";
import { Pending, Processed, Cancelled } from "@/app/ui/dashboard/status";
import Blocked from "./blocked";

const UserDashboard = async () => {
  const session = await auth();
  const username = session.user.username;
  const { user, history } = await fetchUserData(username);
  //console.log("this is session:", session);

  return (
    <>
      {session.isActive === "yes" ? (
        <div className={styles.container}>
          <div className={styles.topbar}>
            <div className="capitalize">
              <p>Welcome, {user.firstname}!</p>
            </div>
          </div>

          <div className={styles.firstrow}>
            <div className={styles.balances}>
              <div className="flex gap-10 md:flex-row flex-col">
                <div className={styles.card}>
                  <div className={styles.textbox}>
                    <p>Total Balance</p>
                    <span className={styles.amount}>
                      {user.currency}
                      {user.t_balance}
                    </span>
                  </div>
                  <div className={styles.icon}>
                    <HiOutlineBanknotes size={32} />
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.textbox}>
                    <p>Available Balance</p>
                    <span className={styles.amount}>
                      {user.currency}
                      {user.a_balance}
                    </span>
                  </div>
                  <div className={styles.icon}>
                    <HiMiniBanknotes size={32} />
                  </div>
                </div>
              </div>

              <div className="flex gap-20 items-center text-[--accent] underline text-[16px] font-bold md:text-[20px] font-thin cursor-pointer">
                <a href="/dashboard/history">
                  <span>View Statement</span>
                </a>
                <a href="/dashboard/transfer">
                  <span>Transfer Funds</span>
                </a>
              </div>
            </div>

            <div className={styles.accountdetails}>
              <span className={styles.amount}>Account Details</span>

              <div
                className={styles.item}
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <span>Account Name:</span>
                <p>
                  {user.firstname} {user.lastname}
                </p>
              </div>
              <div
                className={styles.item}
                style={{ backgroundColor: "F5F5F5" }}
              >
                <span>Account Type:</span>
                <p>{user.account_type}</p>
              </div>
              <div
                className={styles.item}
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <span>Account Number:</span>
                <p>{user.account_number}</p>
              </div>
              <div
                className={styles.item}
                style={{ backgroundColor: "F5F5F5" }}
              >
                <span>Routing Number</span>
                <p>55855</p>
              </div>
            </div>
          </div>

          <div className={styles.thirdrow}>
            <span className={styles.amount}>Recent Transactions</span>
            <div className={styles.table}>
              <table className="w-full rounded-lg">
                <thead>
                  <tr>
                    <td>Transaction</td>
                    <td>Beneficiary</td>
                    <td>Amount</td>
                    <td>Status</td>
                    <td>Date</td>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(-10).map((item) => (
                    <tr>
                      <td>{item.type}</td>
                      <td>{item.username}</td>
                      <td>${item.amount}</td>
                      <td>
                        {item.status === "pending" ? (
                          <Pending />
                        ) : item.status === "processed" ? (
                          <Processed />
                        ) : (
                          <Cancelled />
                        )}
                      </td>
                      <td>{item.createdAt?.toString().slice(4, 16)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Blocked />
      )}
    </>
  );
};

export default UserDashboard;
