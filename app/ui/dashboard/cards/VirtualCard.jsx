"use client"
import './virtualcard.scss'
import React,{useState} from 'react'
  
const VirtualCard = ({userCard}) => {

    const [card, setCard] = useState({
        name: `${userCard.name}`,
        number: `${userCard.number}`,
        month: `${userCard.expiry.slice(0, 2)}`,
        day: `${userCard.expiry.slice(2, 4)}`,
        ccv: `${userCard.cvc}`
    })

    //console.log( 'fetching cards:', userCard)
    //console.log(card_details)


    
    const handleChange= (e) => {
        const { name, value } = e.target;
        setCard((prev) => ({...prev, [name]: value }))
    }

    return (
        <div className="flex gap-10 w-full">
            <div className="small-5 small-offset-1 columns ">
                <div className="callout credit">
                    <div className="row">
                    <div className="small-6 columns">
                        <h1 className="credit__bank">Blue Phoenix Bank</h1>
                    </div>
                    <div className="small-6 columns">
                        <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="column">
                        <p className="credit__card-number">{card.number}</p>
                        <span className="credit__ccv">{card.ccv}</span>
                    </div>

                    <div className='flex justify-between mt-[60px] w-full'>
                        <div className="small-9 columns">
                            <label>Card Holder
                            <p className="credit__name">{card.name}</p>
                            </label>
                        </div>
                        <div className="small-3 columns">
                            <label>Expires
                            <p className="credit__date">{card.month} / {card.day}</p>
                            </label>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>

        <div> options</div>
    </div>
    )
  }
  
  export default VirtualCard