"use client"
import React from 'react'
import CountDown from "react-countdown"

const endingDate = new Date("2023-09-25");
const CountDow = () => {
  return (
    <CountDown className='font-bold text-5xl text-yellow-300 ' date={endingDate}/>
  )
}

export default CountDow