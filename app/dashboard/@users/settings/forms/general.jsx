import React from 'react'
import Image from 'next/image'
import { updateUserSettings } from '@/app/lib/actions.js'



const GeneralInfo = async ({user}) => {
  //console.log('fetching from settings general.jsx', user)
  
  return (
    <div className='general_container'>
      <span>GENERAL INFORMATION</span>
      <form action={updateUserSettings}>
      <input type="text"  name='id' value={user._id} placeholder={`${user._id}`} hidden readOnly/>
        <div className='img'>
          <Image src={user.img || "/noavatar.png"} width={200} height={300}/>
        </div>
        <div className='input-grid'>
        <div className='item'>
            <label>Firstname</label>
            <input type="text"  name='firstname' placeholder={user.firstname}/>
          </div>
          <div className='item'>
            <label>Lastname</label>
            <input type="text" name='lastname' placeholder={user.lastname}/>
          </div>
          <div className='item'>
            <label>Account Number</label>
            <input type="text"  name='account_number' placeholder={user.account_number}/>
          </div>
          <div className='item'>
            <label>Account Type</label>
            <input type="text" name='account_type' placeholder={user.account_type}/>
          </div>
          <div className='item'>
            <label>Email</label>
            <input type="email"  name='email' placeholder={user.email}/>
          </div>
          <div className='item'>
            <label>Occupation</label>
            <input type="text" name='occupation' placeholder={user.occupation}/>
          </div>
          <div className='item'>
            <label>Sex</label>
            <input type="text" name='sex' placeholder={user.sex}/>
          </div>
          <div className='item'>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder={user.phone}/>
          </div>
          <div className='item'>
            <label>Date of Birth</label>
            <input type="text"  name='dob' placeholder={user.dob}/>
          </div>
          <div className='item'>
            <label>Routing Number</label>
            <input type="text"  name='routing_number' placeholder={user.routing_no}/>
          </div>
          <div className='item'>
            <label>IMF</label>
            <input type="text"  name='imf' placeholder={user.imf}/>
          </div>
          <div className='item'>
            <label>COT</label>
            <input type="text"  name='cot' placeholder={user.cot}/>
          </div>
          <div className='item'>
            <label>Tax Id</label>
            <input type="text"  name='tax' placeholder={user.tax}/>
          </div>
          <div className='item'>
            <label>Contact Address</label>
            <input placeholder='address' />
          </div>

          
          
        </div>
          <button className='primary_btn w-full'>Submit</button>
 
      </form>
    </div>
  )
}

export default GeneralInfo