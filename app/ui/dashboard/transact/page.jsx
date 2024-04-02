import React from 'react'
import CreditUser from '../credit/page'
import DebitUser from '../debit/page'

const TransactComponent = () => {
  return (
    <div className='flex justify-between gap-10'>
        <CreditUser/>
        <DebitUser/>
    </div>
  )
}

export default TransactComponent