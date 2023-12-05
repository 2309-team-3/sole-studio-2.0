import React from 'react'
import {Link} from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import Logo from '../assets/solestudio.svg'
import { Html } from '@react-three/drei';

const Navigation = () => {
  return (
    <nav className=' bg-blue-400 p-2 fixed w-screen items-center flex shadow-lg z-20'>
        <div className='flex-1 flex text-lg text-white font-light justify-center'>
          <ul className='flex'>
            <li className='px-10'>
              <a href='/'>Home</a>
            </li>
            <li className='px-10'>
              <a>Products</a>
            </li>
          </ul>
        </div>
        <div className='flex-1 flex justify-center'>
          <a href='/'>
            <img src={Logo} className='h-16  bg-white rounded-full'/>
          </a>
        </div>
        <div className='flex-1 flex text-lg text-white font-light justify-center'>
          <ul className='flex '>
            <li className='px-10'>
              <a>About</a>
            </li>
            <li className='px-10'>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navigation