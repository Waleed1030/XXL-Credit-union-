"use client"
import CreateCard from '@/app/dashboard/@users/cards/createCard/page'
import CardList from '@/app/dashboard/@users/cards/cardList/page'
import React, {useState, useEffect} from 'react'

const Card= ({children, card_name, username, userCard}) => {
    const [isAvailable, setIsAvailable] = useState(false)

    //console.log( 'fetching card.jsx component:', card_name)

    useEffect(() => {
      {userCard ? setIsAvailable(true): setIsAvailable(false)}
    }, [])

    
  return (
    <div className='w-full flex items-center justify-center py-32'>
        {children && isAvailable ? <CardList userCard={userCard}/>  : <CreateCard card_name={card_name} username={username}/>}
    </div>
  )
}

export default Card
