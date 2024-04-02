import React from 'react'
import { updateUserSettings } from '@/app/lib/actions'

const ChangePin = ({user}) => {
  return (
    <div className='general_container'>
      <span>CHANGE PIN</span>
      <form action={updateUserSettings}>
      <input type='text' value={user._id} name='id' hidden readOnly/>
        <div className='flex flex-col gap-5 w-full'>
            <div className='item'>
              <label>Old Pin</label>
              <input type="tel" placeholder={user.pin? user.pin : 'PIN not set'}/>
            </div>
            <div className='item'>
              <label>New Pin</label>
              <input type="tel" placeholder=''/>
            </div>
            <div className='item'>
              <label>Confirm Pin</label>
              <input type="tel" placeholder=''/>
            </div>
            <button className='primary_btn'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default ChangePin