import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stipes from './component/Stipes'
import Products from './component/Products'
import Marquees from './component/Marquees'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-900 text-white font-satoshi overflow-x-hidden w-full min-h-screen'>
      <Navbar />
      <Work />
      <Stipes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
