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
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
    {/*TEXT CONTAINER*/}
      <div className=' flex flex-col  items-center justify-center  gap-8 text-red-500 font-bold flex-1 pb-5 lg:pb-0'>
          <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
            {data[currentSlide].title}
          </h1>
          <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>
      {/*IMAGE CONTAINER xeee*/}
      <div className=' relative w-full flex-1'>
          <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider