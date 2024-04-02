"use client"
import React, { useState } from 'react'
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll'
import './navbar.scss'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  //console.log(toggle)

  return (
    <div className='nav-container'>
        <div className='logo'>
          <Image src="/logo.png" width={200} height={150}/>
        </div>

        {/* Mobile Screen Navbar */}
        <HiMenuAlt3 
          className='icon md:hidden'
          onClick={()=> {setToggle(true)}}/>

          { toggle && (
            <motion.div 
              onClick={() => {setToggle(false)}}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, ease:'linear'}}
              variants={{
                visible: { opacity:1, x:0 },
                hidden: { opacity: 0 , x: -50}
              }}
              className='fixed flex flex-col p-10 h-full z-10 inset-0 overflow-auto bg-[--backdrop] backdrop-blur-lg'
            >
              <div className='w-full flex justify-center items-center p-3 bg-[--secondary] rounded-lg mb-5'>
                <Image src='/favicon.png' width={30} height={20} className='object-cover'/>
              </div>

            <div className='flex flex-col items-center justify-start gap-10'>
              <div className='flex w-full justify-end'>
              <HiOutlineX className='text-[--accent] text-[40px]' onClick={()=> {setToggle(false)}}/>
              </div>
              
              <ul className='flex flex-col items-center justify-start gap-10 font-bold'>
                <Link to='hero'><li className='hover:scale-105 transition-all duration-300' onClick={() => {setToggle(false)}}>Home</li></Link>
                <Link to='about'><li className='hover:scale-105 transition-all duration-300' onClick={() => {setToggle(false)}}>About Us</li></Link>
                <Link to='services'><li className='hover:scale-105 transition-all duration-300' onClick={() => {setToggle(false)}}>Services</li></Link>
                <Link to='contact'><li className='hover:scale-105 transition-all duration-300' onClick={() => {setToggle(false)}}>Contact</li></Link>
                <li className='hover:scale-105 transition-all duration-300'><a href="/signup" onClick={() => {setToggle(false)}}>Open Account</a></li>
              </ul>

              <div className='w-full'>
                <button  className='primary_btn w-full' onClick={() => {setToggle(false)}}><a href="/login">Login</a></button>
              </div>
            </div>

          </motion.div>
          )}


        {/* Large Screen Navbar */}
        <div className='gap-20 hidden md:flex items-center justify-center'>
          <ul className='nav-list '>
            <Link to='hero'><li>Home</li></Link>
            <Link to='about'><li>About Us</li></Link>
            <Link to='services'><li>Services</li></Link>
            <Link to='contact'><li>Contact</li></Link>
            <li><a href="/signup">Open Account</a></li>

            
          </ul>

          <div className='cta'>
            <button  className='primary_btn'><a href="/login">Login</a></button>
          </div>
        </div>

        
        
    </div>
  )
}

export default Navbar