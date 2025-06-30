import React from 'react'

const Footer = () => {
  return (
    <div className='h-[30vh] max-w-screen-xl mx-auto relative mb-5  py-3 flex'>
        <div className="right w-[60%]">
            <h1 className='text-[11vw] leading-none font-semibold'>refokus.</h1>
        </div>
        <div className="left w-[40%] text-zinc-400  flex">
            <div className='h-full w-[33%] '>
                <h1 className='mb-7'>Socials</h1>
                {['Instagram','Twitter (X)','Linkdin'].map((v,i)=>{
                    return <h1 key={i}>{v}</h1>
                })}
            </div>
            <div className='h-full w-[25%] '>
                <h1 className='mb-7'>Services</h1>
                {['Home','Work','Carrers','Contact'].map((v,i)=>{
                    return <h1 key={i} className='text-white'>{v}</h1>
                })}
            </div>
            <div className='h-full w-[40%] text-right text-white leading-none tracking-tighter font-semibold '>
                <h1 className='mt-14'>Refokus is a pioneering digital <br />agency driven by design and <br /> empowered by technology.</h1>
                <button className='bg-blue-600 cursor-pointer text-xs px-3 mt-3 py-2'>Enterprise Partner</button>
            </div>
        </div>
        <div className="footer absolute bottom-0 flex gap-10 text-zinc-400 text-sm">
            {['Privacy Policy','Cokkie Policy','Impress.im','Terms'].map((v,i)=>{
                return <h1 key={i}>{v}</h1>
            })}
        </div>
      
    </div>
  )
}

export default Footer
