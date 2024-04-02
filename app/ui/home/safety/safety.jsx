import React from 'react'
import './safety.scss'
import Image from 'next/image'

const Safety = () => {
  return (
    <div className='safety_container'>
        <span>Safe & Secure</span>
        <p>Truly Financial is built in partnership with global financial institutions and complies with stringent security standards.</p>
        <div className='gridbox'>
            <div className='item'>
               <div className='img'><Image src='/canada-shield.png' width={100} height={100}/></div>
                <p>International payments in Canada provided by our partners who are regulated by FINTRAC and AMF.</p>
            </div>
            <div className='item'>
                <div className='img'><Image src='/visa.png' width={100} height={100}/></div>
                <p>The Truly Financial Visa card is issued by our partners, under license from Visa.</p>
            </div>
            <div className='item'>
                <div className='img'><Image src='/cross-river.png' width={100} height={100}/></div>
                <p>Checking accounts provided by Cross River Bank and Community Federal Savings Bank (CFSB).</p>
            </div>
            <div className='item'>
                <div className='img'><Image src='/fdic.png' width={100} height={100}/></div>
                <p>Cross River Bank & CFSB are members of the Federal Deposit Insurance Corporation.</p>
            </div>
            <div className='item'>
                <div className='img'><Image src='/us-shield.png' width={100} height={100}/></div>
                <p>International payments in the U.S. are provided by our partners who are regulated by FinCEN.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Safety