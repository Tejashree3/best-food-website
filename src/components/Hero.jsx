import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4 dark:bg-slate-600 dark:text-white'>
        <div className='max-h-[500px] relative '>
            {/* Overlay */}
            <div className='px-10 absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-primary'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-5'> <span className='text-primary'>Foods</span> Devlivered</h1>
           <button className='  text-black mx-2 w-[200px]  bg-primary text-white  text-2xl'>Order now</button>
           
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}

export default Hero