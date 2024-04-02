"use client"
import React from 'react'
import { ReactTyped } from "react-typed";
import './hero.scss'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from 'next/image';


const Hero = () => {
  return (
    <div className='hero_container md:px-64 md:py-32'>
        
        <div className='hero_text' id="hero">
          <span>Business Banking That</span>
          <span>Empowers You To {""}
          <ReactTyped strings={["BUY", "SELL", "HIRE"] } typeSpeed={100} loop  className='text-[--accent]'/>
          </span>
          <span>Anywhere in the world</span>

          <div className='tagline'>We are committed to helping you achieve your personal financial goals. When you bank with us, you get access to our full suite of services and the support of our expert financial advisors. </div>

           <a href="/signup">
              <div className='btn' > 
                Get Started
                <div className='arrow'>
                <MdOutlineArrowForwardIos/>
                </div>
              </div>
           </a>
        </div>

        <div className='flex justify-center items-center artbox'>
                  
                    <div className='design-container' >
                    <div className='circle' style={{ backgroundColor: "#2962FF" }}></div>
                    <Image width={100} height={100} src='/hero1.jpg' alt="" className='scale-x-[-1]' />
                  </div>

                  <div className='design-container'>
                    <Image width={100} height={100} src='/hero3.png' alt=""  />
                    <div className='cylinder' style={{ backgroundColor: "#2962FF" }}></div>
                  </div>

                  <div className='design-container'>
                    <div className='cylinder' style={{ backgroundColor: "#2962FF" }}></div>
                    <Image width={100} height={100} src='/hero5.png' alt=""  />
                    <Image width={100} height={100} src='/hero6.png' alt=""  />
                  </div>

                  <div className='design-container'>
                    <Image width={100} height={100} src='/hero4.jpg' alt=""  />
                    <div className='cylinder' style={{ backgroundColor: "#2962FF" }}></div>
                  </div>

                  <div className='design-container'>
                    <Image width={100} height={100} src='/hero2.png' alt=""  />
                  </div>
          </div>
    </div>
  )
}

export default Hero