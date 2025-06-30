import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto m-10 mb-20 flex gap-2'>
      <Card width={'basis-1/3'} para={true} start={false} />
      <Card width={'basis-2/3'} para={false} start={true} />
    </div>
  )
}

export default Cards
