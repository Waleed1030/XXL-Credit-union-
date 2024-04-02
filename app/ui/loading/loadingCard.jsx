import React from 'react'
import './loading.css'

const LoadingCard = () => {
  return (
    <div className=' md:mt-24 h-[80vh] w-full'>
        <div className='skeleton card_headline'></div>
        <div className='skeleton card_footer'></div>
        <div className='skeleton card_text'></div>
        <div className='skeleton card_text'></div>
        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

        <div className='skeleton card_body'></div>

        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>
        

        <div className='skeleton card_text'></div>

        <div className='skeleton card_footer'></div>
        <div className='skeleton card_footer'></div>

    </div>
  )
}

export default LoadingCard