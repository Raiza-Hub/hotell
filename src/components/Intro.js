import React from 'react'

function Intro() {
  return (
    <>
    <div className="flex items-center flex-col font-style  p-20 h-[80vh] ">
       <div className="text-4xl text-center  font-bold w-screen pb-14 lg:pb-0 pt-28 text-white">Once a year go someplace you've never been before.</div>
       <div className="hidden lg:flex pb-14 text-white text-2xl font-bold">with Hotell an Unforgettable Adventures Await!</div>
       <button className='rounded-lg py-2 px-4 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300'>Get Started</button>
    </div>
    </>
  )
}

export default Intro