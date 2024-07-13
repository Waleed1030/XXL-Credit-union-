"use client";
import React, { useState } from "react";
import { transfer } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import styles from "./transfer.module.css";
import LocalTransfer from "./local/page";
import InternationalTransfer from "./international/page";
import { PinModal, COTModal, SuccessModal, FailedModal, BothModal } from "@/app/ui/dashboard/modals/modals";

import { BiTransferAlt } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";

const Transfer = ({ children, username, wmethod }) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("pending");
  const [state, formAction] = useFormState(transfer, undefined);
  const[verify, setVerify] = useState("");


  return (
    <div className={styles.container}>
      <div className={styles.title}>TRANSFER FUNDS</div>

      <div className={styles.boxContainer}>
        <form action={formAction} className={styles.inputbox}>
          <div className={styles.amount}>
            <p>Enter Amount</p>
            <input type="number" name="amount" className={styles.input} />
          </div>

          <div className={styles.title}>Choose Deposit Type:</div>

          <div className={styles.currency}>
            <div
              className={styles.box}
              onClick={() => setType("Local Transfer")}
            >
              <div className={styles.logo}>
                <BiTransferAlt size={20} />
              </div>
              <p>Local Transfers</p>
            </div>

            <div
              className={styles.box}
              onClick={() => setType("International Transfer")}
            >
              <div className={styles.logo}>
                <GrLineChart size={20} />
              </div>
              <p>International Transfers</p>
            </div>

            <input type="text" name="type" value={type} readOnly hidden />
            <input type="text" name="status" value={status} readOnly hidden />
            <input
              type="text"
              name="username"
              value={username}
              readOnly
              hidden
            />
          </div>

          <div>
            {children && type === "International Transfer" ? (
              <InternationalTransfer />
            ) : type === "Local Transfer" ? (
              <LocalTransfer />
            ) : null}
            
            {verify === "pin" ?  <PinModal state={state}/> :
             verify ==="cot" ? <COTModal  state={state} />  :
             verify === "both" ? <BothModal state={state}/> :  null}


            {state === "success" ? (
              <SuccessModal />
            ) : state === "failed" ? (
              <p className="text-red-400 text-[12px]">Insufficient Balance!</p>
            ) : state === "not-allowed" ?
              ( <FailedModal /> ) :  null}
          </div>

          <div className={styles.btn} onClick={() => setVerify(wmethod)}>Proceed</div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;