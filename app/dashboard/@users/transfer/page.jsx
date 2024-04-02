import React from 'react'
import Transfer from './transfer'
import LocalTransfer from './local/page'
import InternationalTransfer from './international/page'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { fetchUserData } from '@/app/lib/data'

const page = async () => {

  const session  = await auth()
  const username = session.user.username
  const { user } = await fetchUserData(username);
  const wmethod = user.withdraw_method;
  //console.log(settings)

  return (
    <div>
      <Transfer username={username} wmethod={wmethod}>
        <LocalTransfer />
        <InternationalTransfer/>
      </Transfer>
    </div>
  )
}

export default page