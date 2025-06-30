import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    
    <div className="relative bg-zinc-900 flex gap-30 text-white items-center pb-5 py-4 px-5 max-w-screen-xl mx-auto border-b-[1.5px] border-zinc-700 ">
        <div className="">
      <Logo />
        </div>
      <div className="links space-x-11 flex text-[13px] font-semibold text-sm">
        <NavLink to="/" end className="flex items-center  w-15 space-x-2">
          {({isActive})=>(
            <>
            {isActive && (<span className="inline-block shadow-[0_0_8px_2px_rgba(74,222,128,0.8)] bg-green-400 w-[7px] h-[7px] rounded-full"></span>)}
            <span>Home</span>
            </>
          )}
        </NavLink>
        <NavLink to="/work" className="flex items-center w-15 space-x-2">
          {({isActive})=>(
            <>
            {isActive && (<span className="inline-block shadow-[0_0_8px_2px_rgba(74,222,128,0.8)] bg-green-400 w-[7px] h-[7px] rounded-full"></span>)}
            <span>Work</span>
            </>
          )}
        </NavLink>
        <NavLink to="/culture" className="flex items-center w-15 space-x-2">
          {({isActive})=>(
            <>
            {isActive && (<span className="inline-block shadow-[0_0_8px_2px_rgba(74,222,128,0.8)] bg-green-400 w-[7px] h-[7px] rounded-full"></span>)}
            <span>Culture</span>
            </>
          )}
        </NavLink>
        <span className="inline-block h-5 w-[1px] bg-zinc-600"></span>
        <NavLink to="/news" className="flex items-center w-15 space-x-2">
          {({isActive})=>(
            <>
            {isActive && (<span className="inline-block shadow-[0_0_8px_2px_rgba(74,222,128,0.8)] bg-green-400 w-[7px] h-[7px] rounded-full"></span>)}
            <span>News</span>
            </>
          )}
        </NavLink>
      </div>
      <div className="ml-auto px-10">
      <Button val={'Start a Project'}  />
      </div>
    </div>
  );
};

export default Navbar;
