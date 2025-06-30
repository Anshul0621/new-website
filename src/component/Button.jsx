import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Button = ({val='Get started'}) => {
  return (
    <div className='bg-white w-35 h-8 flex cursor-pointer items-center text-black rounded-full '>
      <span className='px-3 py-2 text-[15px] '>{val}</span>
      <GoArrowRight />
    </div>
  )
}

export default Button
