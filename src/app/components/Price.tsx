"use client"
import React , {useState , useEffect} from 'react'

type Props ={
    price:number;
    id:number;
    options?:{title:string; additionalPrice:number}[]
}
const Price = ({price,id,options}:Props) => {
    const[counter,setCounter]=useState(1);
    const [totalPrice,setTotalPrice]=useState(price);
    const [selected,setSelected]=useState(0);
   
    useEffect(()=>{
        setTotalPrice(counter*(options ? price+options[selected].additionalPrice : price));
    },[counter,selected,options,price])

    
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${totalPrice.toFixed(2)}</h2>
        {/*Options container */}
        <div className='flex gap-4'>
           {options?.map((option,index)=>(
            <button key={option.additionalPrice}
            className='p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]'
            style={{
                background:selected === index ?"rgb(248 113 113)": "white",
                color: selected === index ? "white" : "red",
            }}
            onClick={()=>setSelected(index)}
            >
                {option.title}
            </button>
           ))}
        </div>
        {/*quantity container & add btn container*/}
        <div className='flex justiy-between items-center'>
          <div className='flex justify-between w-full p-3 ring-1 ring-red-400 '>
            <span> Quantity</span>
            <div className='flex gap-4 items-center'>
                <button onClick={()=>setCounter((prev)=>prev >1? prev-1 : 0)}>{'<'}</button>
                <span>{counter}</span>
                <button onClick={()=>setCounter((prev)=>prev <9 ? prev+1 : 9)}>{'>'}</button>
            </div>
          </div>
          {/*cart button*/}
          <button className={`bg-${counter===0 ?"red-400":"red-500"} w-56 uppercase text-white p-3 ring-1 ring-red-500 ${counter ===0 && "cursor-not-allowed"}`}
           disabled={counter ===0}
           onClick={()=>alert("here")}>
            Add to Cart
          </button>
        </div>
    </div>
  )
}

export default Price