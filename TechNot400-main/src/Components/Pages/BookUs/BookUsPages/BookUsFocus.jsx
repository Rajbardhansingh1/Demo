import React from 'react'
import { GiBullseye } from "react-icons/gi";
import business_benifit from '../../../../images/BookUs/Business_benifit.png'

const BookUsFocus = () => {
  return (
    <>
      <div className='bg-black h-[1px] mx-4 md:mx-60 mt-12'></div>
      
      <div className='pt-10 md:pt-20 font-poppins'>
        <h1 className='text-3xl md:text-5xl font-bold text-blue-900 flex flex-col md:flex-row justify-center items-center text-center md:text-left'>
          Why You Can 
          <span className='px-0 md:px-6 text-red-600'>
            <GiBullseye />
          </span> 
          More On Your Growth?
        </h1>
      </div>
      
      <div className='flex justify-center pt-10 md:pt-20 pb-10 md:pb-20'>
        <img className='w-[90%] h-auto md:w-[50%] md:h-[50%]' src={business_benifit} alt="Business Benefits" />
      </div>
    </>
  )
}

export default BookUsFocus;
