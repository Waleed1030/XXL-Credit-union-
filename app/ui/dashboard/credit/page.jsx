"use client"
import React, { useState } from 'react'
import './credit.scss'
import { motion } from 'framer-motion'
import { creditUser } from "@/app/lib/actions"

import { useFormState } from "react-dom";




const CreditUser = () => {

  const [toggle, setToggle] = useState(false);

  const [state, formAction] = useFormState(creditUser, undefined);



  return (
    <div className='relative'>
        <div className='credit_btn cursor-pointer' onClick={() => setToggle(true)}>Credit User</div>
        {toggle && (
             <motion.div 
             initial="hidden"
             whileInView="visible"
             transition={{ duration: 0.3, ease:'linear'}}
             variants={{
               visible: { opacity:1, x:0 },
               hidden: { opacity: 0 , x: -50}
             }}
             className='fixed p-3 flex flex-col justify-center items-center h-full z-10 inset-0 overflow-auto bg-[--backdrop] backdrop-blur-md'
           >
            <div className='bg-[--bg] w-full p-3 rounded-xl flex flex-col justify-start items-center shadow-lg'>
                <span className='text-lg'>Credit User</span>
                <form action={formAction} className='w-full flex flex-col gap-[16px] justify-start items-start mt-5'>
                    <div className='item'>
                        <label>User</label>
                    <input type="text"  placeholder='username' name="username"/>
                    </div>
                    <div className='item'>
                        <label>Transaction Type</label>
                    <input type="text"  placeholder='salary, profits, tax refund etc...' name="type"/>
                    </div>
                    <div className='item'>
                        <label>Amount</label>
                    <input type="number"  placeholder='amount' name="amount"/>
                    </div>
                    <div className='item'>
                        <label>Description</label>
                        <input type="text"  placeholder='desc' name="remark"/>
                        
                        {state && state === "successful" ? setToggle(false) : null}
                    </div>

                    
                    <div className='flex justify-between gap-10 items-center w-full'>
                    <button className='p-2 w-full rounded-lg bg-[--accent] text-white font-bold hover:bg-[--hover] cursor-pointer'>Credit User</button>
                    <div onClick={() => {setToggle(false)}} className='p-2 w-full flex justify-center items-center rounded-lg bg-[--secondary] font-bold hover:bg-[--hover] hover:text-white cursor-pointer'>Cancel</div>
                    </div>
                    
                </form>
            </div>
           </motion.div>
        )}
    </div>
  )
}

export default CreditUser;