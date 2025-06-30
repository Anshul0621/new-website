import React, { useContext } from 'react'
import { UserContext } from '../assets/Context'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

const Work = () => {
    const {images,setimages} = useContext(UserContext)
    const { scrollY,scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  toggleimages(Math.floor(latest*100))
})
  
function showimage(arr){
  setimages(prev=>(
    prev.map((v,i)=>(
      {...v,isActive:arr.includes(i)}
    ))
  ))

}
function toggleimages(value){

  
  switch (value) {
    case 0:
      showimage([])
      break
    case 2:
      showimage([0])
      break;
    case 4:
      showimage([0,1])
      break
    case 6:
      showimage([0,1,2])
      break
    case 8:
      showimage([0,1,2,3])
      break
    case 10:
      showimage([0,1,2,3,4])
      break
    case 12:
      showimage([0,1,2,3,4,5])
      
      
  }
  
  
  
}
    
    
  return (
    <div className='w-full overflow-hidden'>
    <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[30vw] font-semibold select-none leading-none font-medium'>work</h1>
        <div className='absolute w-full h-full top-0'>
                {images.map((elem,index)=>(elem.isActive && (<img key={index} className='absolute -translate-x-[50%] -translate-y-[50%] w-50 h-50 object-cover rounded-lg' src={elem.url} style={{top:elem.top,left:elem.left}} alt="" />)))}
        </div>
    </div>
      
    </div>
  )
}

export default Work
