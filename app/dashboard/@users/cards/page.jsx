import React from 'react'
import CreateCard from './createCard/page'
import CardList from './cardList/page'
import Card from './card'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { fetchUserData } from '@/app/lib/data'

const page = async () => {
  const session  = await auth()
  const card_name = session.user.firstname.toUpperCase() +' ' + session.user.lastname.toUpperCase()
  const username = session.user.username
  const { userCard } = await fetchUserData(username);
  //console.log( 'fetching from page.jsx:', card_name)


  return (
    <div>
      <Card 
      card_name={card_name.toString()} 
      username={username}
      userCard={userCard}
      >
        <CardList/>
        <CreateCard/>
      </Card>
    </div>
  )
}

export default page