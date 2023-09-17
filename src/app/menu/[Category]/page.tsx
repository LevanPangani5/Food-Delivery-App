import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link 
        href={`/product/${item.id}`} 
        key={item.id}
        className='group even:bg-fuchsia-50 w-full h-[60vh] border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 border-red-500 p-4 flex flex-col justify-between'
        > 
        {/*image container*/}
          {item.img && (
          <div className='relative h-[80%]'>
            <Image src={item.img} alt="" fill className='object-contain'/>
          </div> 
            )}
        {/*text container */}
        <div className=' flex items-center justify-between '>
          <h1 className=' text-2xl uppercase p-2'>{item.title}</h1>
          <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
          <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
        </div>
          
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage;