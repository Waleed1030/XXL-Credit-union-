import React from 'react'
import { GeneralInfo, ChangePassword, ChangePin } from './forms'
import Account from './account'


import { auth } from '@/app/api/auth/[...nextauth]/auth';
import { fetchUserData } from '@/app/lib/data.js';

const page = async () => {

  const session = await auth()
  const username = session.user.username
  const { user } = await fetchUserData(username );
  //console.log('fetching from settings page.jsx', user)

  
  return (
    <div>
      <Account  user={user.toJSON()}>
          <GeneralInfo  />
          <ChangePassword />
          <ChangePin />
      </Account>
    </div>
  )
}

export default page