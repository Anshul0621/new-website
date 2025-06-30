import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Button from './Button';

const Card = ({width,para,start}) => {  
  return (
    <div className={`rounded-lg transition-all relative h-[65vh]  bg-zinc-700 p-5 ${width} ${para?'hover:px-6':' hover:bg-violet-500 hover:px-6'} `}>
      <div className="upper w-full  flex justify-between items-center">
        <h2>{para?'Up Next:Culture':'Get In Touch'}</h2>
        <FaArrowRight />
      </div>
      <div className="second mt-5">
        <h1 className='text-3xl'>{para?'Who we are':(
            <>
            Lets get to it, <br /> together.
            </>
        )}</h1>
      </div>
      <div className="down absolute bottom-0">
        <h1 className='text-8xl font-semibold '>{para?null:'Start a Project'}</h1>
      {para?null:<button className='border mb-2 mt-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-zinc-500'>Contact us</button>}
        {para?<p className='text-zinc-400 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>:null}
      </div>
    </div>
  )
}

export default Card
