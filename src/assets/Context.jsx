import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext()
const Context = (props) => {
   const [val,setval] = useState([1,2,4])
   const [images,setimages] = useState([
    {url:'https://images.unsplash.com/photo-1656381620321-bddff61435c3?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',top:'65%',left:'50%',isActive:false},
    {url:'https://images.unsplash.com/photo-1580331141991-fa3f531296ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZnl8ZW58MHx8MHx8fDA%3D',top:'67%',left:'43%',isActive:false},
    {url:'https://images.unsplash.com/photo-1680339484064-1c06c34562a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaWZ5fGVufDB8fDB8fHww',top:'71%',left:'55%',isActive:false},
    {url:'https://images.unsplash.com/photo-1697985189201-293f0ddfc36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2NpZnl8ZW58MHx8MHx8fDA%3D',top:'73%',left:'46%',isActive:false},              
    {url:'https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fHww',top:'80%',left:'50%',isActive:false},
    {url:'https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww',top:'78%',left:'45%',isActive:false}
   ])
   const videos=['https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm','https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm','https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-169.webm','https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/deepset-169.webm','https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm']
   const data = [
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg', number:48},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg', number:67},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg', number:28},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg', number:81},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg', number:65},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg', number:12},
   ]
   const mrquedata = [
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg' },
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg'},
    {url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg'},
   ]
   const productdata = [
    {title:'Artiqe',des:'Artique Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum aut laudantium, nulla dolorum beatae officia cumque architecto! Voluptate?',live:true,case:false},
    {title:'TTR',des:'TTr Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum aut laudantium, nulla dolorum beatae officia cumque architecto! Voluptate?',live:true,case:false},
    {title:'YYR 2022',des:'YYR 2022tique Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum aut laudantium, nulla dolorum beatae officia cumque architecto! Voluptate?',live:true,case:false},
    {title:'Yahoo',des:'Yahoo Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum aut laudantium, nulla dolorum beatae officia cumque architecto! Voluptate?',live:true,case:true},
    {title:'Rainfall',des:'Rainfall Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum aut laudantium, nulla dolorum beatae officia cumque architecto! Voluptate?',live:true,case:true},
   ]







  return (
    <UserContext.Provider value={{val,videos,setval,images,setimages,data,productdata,mrquedata}}>{props.children}</UserContext.Provider>
  )
}

export default Context
