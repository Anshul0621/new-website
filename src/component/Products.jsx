import React, { useContext, useRef, useState } from 'react'
import Product from './Product'
import { UserContext } from '../assets/Context'
import { motion } from 'framer-motion'
import { video } from 'framer-motion/client'

const Products = () => {
    const {productdata,videos} = useContext(UserContext)

    const [pos,setpos] = useState(0)
    const movepos = (val)=>{
      setpos(val*40)
    }
  const videref = useRef(null)


  return (
    <div className='mt-30 group relative'>
        {productdata.map((v,i)=><Product movepos={movepos} index={i} key={i} val={v} />)}
      <div className={`w-full h-full absolute top-0  pointer-events-none `}>
        <motion.div transition={{ease: [0.76,0,0.24,1],duration:0.6}} initial={{y:pos,x:'-50%'  }} animate={{y:pos+'vh',x:'-50%'}}  className='absolute w-[25vw] left-[48%] h-[40vh] hidden group-hover:block overflow-hidden'>
           {videos.map((v,i)=>(
             <motion.div onMouseEnter={()=>videref.current.play()} onMouseLeave={()=>videref.current.pause()} animate={{y:-pos+'vh'}} transition={{ease: [0.76,0,0.24,1],duration:0.6}} className='w-full h-full rounded-lg overflow-hidden '>
              <video ref={videref} loop muted autoPlay className='w-full h-full object-cover' src={v}></video>
            </motion.div>
           ))}
           
        </motion.div>
      </div>
        
      
    </div>
  )
}

export default Products
