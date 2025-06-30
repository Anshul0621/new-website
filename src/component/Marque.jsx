import React, { useContext } from 'react'
import { UserContext } from '../assets/Context'

const Marque = ({val}) => {
    
  return (
    <div className='flex items-center min-w-[150px] px-4'>
        <img className='invert w-full h-10' src={val.url} alt="" />
    </div>
  )
}

export default Marque
