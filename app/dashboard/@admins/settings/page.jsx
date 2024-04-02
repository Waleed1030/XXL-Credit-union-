import React from 'react'
import { fetchSettings } from '@/app/lib/data'
import { updateSettings } from '@/app/lib/actions';
import './settings.scss'


const Settings = async () => {

  const { settings } = await fetchSettings();


  return (
    <div className='w-full my-3 md:mt-24 bg-[--bg] rounded-lg p-5 shadow-lg flex items-center justify-center'>
      <div className='formContainer'>
          <form action={updateSettings}>

            <div >
              <label>Site Name</label>
              <input type="text" name="site_name" placeholder={settings.site_name} />
            </div>

            <div >
              <label> About Us</label>
              <input type="text" name="about" placeholder={settings.about} />
            </div>

            <div >
              <label> Site URL</label>
              <input type="text" name="site_url" placeholder={settings.site_url} />
            </div>

            <div >
              <label>Email</label>
              <input type="text" name="email" placeholder={settings.email} />
            </div>

            <div >
              <label>Phone</label>
              <input type="text" name="phone" placeholder={settings.phone} />
            </div>

            <div >
              <label>Address</label>
              <input type="text" name="address" placeholder={settings.address} />
            </div>

            <div >
              <label>Wallet</label>
              <input type="text" name="wallet" placeholder={settings.wallet} />
            </div>

            <div >
              <label>Bank Name</label>
              <input type="text" name="bank_name" placeholder={settings.bank_name} />
            </div>

            <div >
              <label>Swift code</label>
              <input type="text" name="swift" placeholder={settings.swift} />
            </div>

            <div >
              <label>Routing Number</label>
              <input type="text" name="routing_number" placeholder={settings.routing_number} />
            </div>

            <div >
              <label>Account Number</label>
              <input type="text" name="account_number" placeholder={settings.account_number} />
            </div>     

            <div className='btn'>
            <button type='submit' className="primary_btn">Update Fields</button>
            </div>
          </form>
      </div>
      
    </div>
  )
}

export default Settings