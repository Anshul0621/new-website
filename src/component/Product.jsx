import React from 'react'
import Button from './Button'

const Product = ({val,movepos,index}) => {
  return (
    <div onMouseEnter={()=>movepos(index)} className='w-full h-[40vh] flex items-center py-10 justify-between px-40'>
      <div className="left text-[4vw]">{val.title}</div>
      <div className="right flex flex-col w-[25vw] h-full">
        <p className='mb-3 px-2'>
        {val.des}
        </p>

        <div className='px-2'>
            <div className='flex items-center gap-3'>
        {val.live ? <Button val={'Live Project'} /> : null}
        {val.case ? <Button val={'Case Study'} /> : null}
            </div>
        
        
        </div>

      </div>
    </div>
  )
}

export default Product
