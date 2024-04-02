"use client"
import { createCard } from '@/app/lib/actions'
import React, { useState} from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import '../card.scss';
import LoadingBtn from '@/app/ui/loading/loadingBtn'


const CreateCard = ({card_name, username}) => {
  const [loading, setLoading] = useState(false)
 // console.log('logging from createCard:', card_name)

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const d = new Date()
      const year = d.getFullYear()
      let month = d.getMonth() + 1
      const date = year - 2000 + 3


      if (month < 10 ){
        month = '0' + month
      }else{
        month = month
      }

      const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      setDetails((prev) => ({...prev, [name]: value, 
        number: randomNumber(1000000000000000, 6999999999999999),
        cvc: randomNumber(100, 999) ,
        expiry: `${month}` + `${date}`
      }))
      
    }


    const [details, setDetails] = useState({
      expiry: '',
      cvc: '',
      number: '',
    })


  return (
    <div className='container py-24 flex w-full justify-center items-center'>

     <div id='PaymentForm'>
          <div>
          <Cards 
            number={details.number}
            expiry={details.expiry}
            cvc={details.cvc}
            name={card_name}
            
            />
          </div>
            

            <form action={createCard} >
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                readOnly
                hidden
              />        
              <input
                type="text"
                name="number"
                placeholder="Card Number"
                value={details.number}
                readOnly
              />
              <input
                type="text"
                name="name"
                placeholder="Card Name"
                value={card_name}
                readOnly
              />
              <div
              onClick={handleInputChange}
              className='rounded-lg cursor-pointer bg-[--accent] py-1 px-3 w-fit text-[12px] text-white flex items-center justify-center'
              >Generate Card</div>


              <div className='flex gap-5'>
              <input
                type="text"
                name="expiry"
                placeholder="Expiry"
                value={details.expiry}
                readOnly
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={details.cvc}
                readOnly
              />
              </div>

              <button className='primary_btn mt-5 flex justify-center items-center gap-3' onClick={()=>{ setLoading(true)}}>
                Request Card
                {loading && <LoadingBtn/>}
              </button>
              
            </form>
            
        </div>
    </div>
    
  )
}

export default CreateCard