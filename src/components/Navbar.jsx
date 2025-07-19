'use client'
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";


export default function Navbar() {
  const [menu , setMenu]=useState(false)
  return (
    <div>
      <div className="flex justify-between  items-center px-5  sm:px-8 md:px-14 lg:px-20 lg:pt-10  sm:pt-5 md:pt-8  pt-3 ">
      <img src="\assets\logo-image.svg" alt="image not found" className="lg:w-32 lg:h-10 md:w-28 md:h-8 sm:w-20 sm:h-6 w-14 h-4"  />
      <div className="md:flex hidden  gap-4 text-center text-nowrap font-normal lg:text-lg md:text-base sm:text-xs text-[10px] ">
        <h3>Home</h3>
        <h3>Services</h3>
        <h3>Our Project</h3>
        <h3>About us</h3>
      </div>
      <button className="border hidden md:flex border-white font-normal md:text-base sm:text-sm text-xs  lg:text-lg  sm:px-2  text-nowrap px-1  py-1 md:px-4 md:py-2 text-white rounded-lg">
        Contact Us
      </button>
          <IoIosMenu  onClick={()=>setMenu(prev=>!prev)}
            className=" md:hidden" />

    </div>
     
           {menu&&<div className="text-center px-4 pt-4"> 
              <h3>Home</h3>
        <h3>Services</h3>
        <h3>Our Project</h3>
        <h3>About us</h3>
           </div>}
    </div>
    
    

  );
}
