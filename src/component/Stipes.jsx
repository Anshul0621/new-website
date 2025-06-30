import React, { useContext } from 'react'
import Stripe from './Stripe'
import { UserContext } from '../assets/Context'

const Stipes = () => {
    const {data} = useContext(UserContext)
    
  return (
    <div className='flex mt-15 '>
      {data.map((elem,index)=>(
        <Stripe elem={elem} key={index} />
      ))}
    </div>
  )
}

export default Stipes
