'use client'
import React ,{useEffect, useState} from 'react'
import Image from 'next/image'

const data=[
    {
        id:1,
        title:"ALWAYS FRESH & ALWAYS CRISPY & ALWAYS HOT",
        image:"/slide1.png"
    },
    {
        id:2,
        title:"We deliver ypu order whereever you are in GE",
        image:"/slide.png"
    },
    {
        id:3,
        title:"The best pizza to share with your family",
        image:"/slide2.png"
    }
]
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
 const interval=setInterval(
   ()=>setCurrentSlide((prev)=>(prev===data.length-1 ? 0: prev+1))
 ,2000);
 //so we don't cause memory leakage
 return ()=>clearInterval(interval);
  },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
    {/*TEXT CONTAINER*/}
      <div className='h-1/2 flex flex-col items-center justify-center  gap-8 text-red-500 font-bold lg:flex-1'>
          <h1 className='text-5xl text-center uppercase '>
            {data[currentSlide].title}
          </h1>
          <button className='bg-red-500 text-white py-4 px-8 md:text-6xl lg:text-7xl'>Order Now</button>
      </div>
      {/*IMGAE CONTAINER*/}
      <div className='h-1/2 relative w-full lg:flex-1'>
          <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider