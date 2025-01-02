import React from 'react'
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';


const Footer = () => {
  return (
<div className='bg-gray-100 dark:bg-slate-800 dark:text-white'>
  <div className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 gap-6'>
    
    <div className='px-4'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl pb-6'>
        Best <span className='font-bold'>Food</span>
      </h1>
      <p className='text-2xl text-gray-400'>Learn about the history and usage of lorem ipsum</p>
    </div>

    <div className='px-4'>
      <h1 className='text-2xl text-gray-800'>Links</h1>
      <ul className='flex flex-col p-4 text-gray-500'>
        <li className='text-xl py-4 flex'>
          <TbTruckDelivery size={25} className='mr-4 text-primary' /> Orders
        </li>
        <li className='text-xl py-4 flex'>
          <MdHelp size={25} className='mr-4 text-primary' /> Help
        </li>
        <li className='text-xl py-4 flex'>
          <AiFillTag size={25} className='mr-4 text-primary' /> Promotions
        </li>
        <li className='text-xl py-4 flex'>
          <BsFillSaveFill size={25} className='mr-4 text-primary' /> Best Ones
        </li>
      </ul>
    </div>
    <div className='px-4'>
      <h1 className='text-2xl text-gray-800'>About us</h1>
      <ul className='flex flex-col p-4 text-gray-500'>
        <li className='text-xl py-4 flex'>
          Orders
        </li>
        <li className='text-xl py-4 flex'>
         Help
        </li>
        <li className='text-xl py-4 flex'>
        Promotions
        </li>
        <li className='text-xl py-4 flex'>
          Best Ones
        </li>
      </ul>
    </div>

    <div className='px-4 '>
      <h1 className='text-2xl text-gray-800 pb-6'>Location</h1>
      <p className='text-xl text-gray-500 py-4'>
        1234 Main St,<br />
        Springfield, USA
      </p>
      <p className='text-xl text-gray-500 py-4'>
        Phone: (123) 456-7890
      </p>
 
     
    </div>

  </div>
</div>

  )
}

export default Footer