import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex-col md:flex-row md:justify-between md:bg-[url('/')]">
      {/*TEXT CONTAINER */}
        <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
            <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & Frernch fry</h1>
            <p className='text-white xl:text-xl'>Progressivly simplify effective running out of batteries . empower the
               shrooms for glory
            </p>
            <CountDown/>
            <button className='bg-red-500 text-white rounded-md py-3 px-6 '>Order Now</button>
        </div>
        {/*IMAGE CONTAINER */}
        <div className='relative flex-1 w-full md:h-full'>
           <Image src="/" alt="" fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Offer