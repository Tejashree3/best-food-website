import React from 'react';
import { FaUtensils, FaTruck, FaDrumstickBite, FaAppleAlt, FaDollarSign, FaHeadset } from 'react-icons/fa';

const services = [
  { icon: <FaUtensils />, color: '#fbbf24', title: 'Food Delivery', description: 'We deliver your favorite meals quickly and reliably.' },
  { icon: <FaTruck />, color: '#34d399', title: 'Fast Shipping', description: 'Enjoy fast and efficient shipping services for your orders.' },
  { icon: <FaDrumstickBite />, color: '#f87171', title: 'Fresh Meals', description: 'Experience fresh and delicious meals with every order.' },
  { icon: <FaAppleAlt />, color: '#60a5fa', title: 'Healthy Options', description: 'Choose from a variety of healthy food options.' },
  { icon: <FaDollarSign />, color: '#fbbf24', title: 'Affordable Pricing', description: 'Get great value for your money with our competitive prices.' },
  { icon: <FaHeadset />, color: '#9ca3af', title: 'Customer Support', description: 'We are here to assist you with any questions or issues.' },
];

const Services = () => {
  return (
<div className='dark:bg-slate-600 dark:text-white max-w-[1640px] mx-auto p-4 py-12 bg-gray-100 min-h-screen mb-10'>
    <div className='pb-7'>
    <h1 className='text-primary font-bold text-4xl text-center'>
Services
  </h1>
  </div>

    <div className="flex flex-wrap justify-center gap-6  ">
        




      {services.map((service, index) => (
        <div
          key={index}
          className="dark:bg-slate-800  relative w-80 h-72 bg-gray-200 rounded-lg overflow-hidden group transition-transform transform hover:scale-105"
        >
          <div
            className="absolute   bg-gradient-to-r from-primary to-primary text-center top-0 rounded-lg left-0 w-full h-full flex justify-center
             items-center transition-all duration-500 ease-in-out group-hover:top-6 group-hover:left-[40%] group-hover:w-20 group-hover:h-20"
           
          >
            <div className="text-white dark:text-white text-5xl transition-transform duration-500 ease-in-out group-hover:text-3xl">
              {service.icon}
            </div>
          </div>
          <div className="relative p-6 text-center dark:text-white text-black mt-28 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-md font-light leading-6">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
