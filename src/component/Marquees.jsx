import React, { useContext } from 'react'
import Marque from './Marque'
import { UserContext } from '../assets/Context'
import { motion } from 'framer-motion'

const Marquees = () => {
    const {mrquedata} = useContext(UserContext)
  return (
     <div className="overflow-hidden w-full my-5 whitespace-nowrap w-full">
    <motion.div initial={{x:'0'}} animate={{x:'-50%'}} transition={{ease:'linear',repeat:Infinity,duration:20}} className='flex w-max'>
        {[...mrquedata,...mrquedata].map((v,i)=>{
            return <Marque val={v} key={i} />
        })}
    </motion.div>
        </div>
  )
}

export default Marquees
