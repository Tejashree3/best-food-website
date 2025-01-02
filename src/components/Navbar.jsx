import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { FaHome, FaPhoneAlt, FaServicestack, FaMoon, FaSun } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the document body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='max-w-[1640px] dark:bg-slate-800 dark:text-white mx-auto flex justify-between items-center p-4 pr-20'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Food</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 dark:bg-gray-700 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>

      {/* Dark mode toggle */}
      <div className='flex items-center'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='bg-black text-white p-2 rounded-full mr-2'
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Cart button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
          <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>
      </div>

      {/* Mobile Menu */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div
        className={nav
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white dark:bg-gray-800 z-10 duration-300'
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Food</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800 dark:text-gray-200'>
            <li className='text-xl py-4 flex'>
              <Link to="/" className="flex items-center">
                <FaHome size={25} className='mr-4' /> Home
              </Link>
            </li>
            <li className='text-xl py-4 flex'>
              <Link to="/headline-cards" className="flex items-center">
                <MdFavorite size={25} className='mr-4' /> Top Rated
              </Link>
            </li>
            <li className='text-xl py-4 flex'>
              <Link to="/services" className="flex items-center">
                <FaServicestack size={25} className='mr-4' /> Services
              </Link>
            </li>
            <li className='text-xl py-4 flex'>
              <Link to="/contact" className="flex items-center">
                <FaPhoneAlt size={25} className='mr-4' /> Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
