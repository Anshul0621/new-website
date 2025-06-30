import React from 'react'

const Stripe = ({elem}) => {
  return (
    <div className='w-[16.66%] bg-200-sky py-1 flex items-center justify-between px-4 border border-zinc-700'>
      <img src={elem.url} className='w-30 invert' alt="loading..." />
      <h1 className='text-[20px] font-semibold'>{elem.number}</h1>
    </div>
  )
}

export default Stripe
