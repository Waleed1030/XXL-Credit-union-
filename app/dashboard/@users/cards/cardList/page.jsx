import React from 'react'
import '../card.scss';
import VirtualCard from '@/app/ui/dashboard/cards/VirtualCard';

const CardList = ({userCard}) => {

  //console.log( 'fetching cards:', userCard)

  return (
    <div id='CardForm'>
      <VirtualCard userCard={userCard}/>
    </div>
  )
}

export default CardList