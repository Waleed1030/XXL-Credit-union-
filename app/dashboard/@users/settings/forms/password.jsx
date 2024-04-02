import React from 'react'
import { updateUserSettings } from '@/app/lib/actions'

const ChangePassword = ({user}) => {
  return (
    <div className='general_container'>
      <span>CHANGE PASSWORD</span>
      <form action={updateUserSettings}>
      <input type='text' value={user._id} name='id' hidden readOnly/>
        <div className='flex flex-col gap-5 w-full'>
          <div className='item'>
            <label>Old Password</label>
            <input type="tel" placeholder=''/>
          </div>
          <div className='item'>
            <label>New Password</label>
            <input type="tel" placeholder=''/>
          </div>
          <div className='item'>
            <label>Confirm Password</label>
            <input type="tel" placeholder=''/>
          </div>
          <button className='primary_btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword