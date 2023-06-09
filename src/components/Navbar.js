import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {CgMenuGridO} from 'react-icons/cg'

function Navbar() {
    const number = 9063611541
  return (
    <>
    <div className="flex justify-between items-center lg:mx-24  p-10 font-style text-white">
    <a href="/"><div className='text-2xl font-bold'>Hotell</div></a>
        <CgMenuGridO className='lg:hidden cursor-pointer' fontSize={30}/>
        <div className="hidden lg:flex  xl:ml-20">
            <a href="/"><div className='ml-4'>Home</div></a>
            <a href="/destination"><div className="flex items-center  ml-4">
            Destination
            <div className="ml-1"><RiArrowDropDownLine/> </div>
            </div></a>
            <a href="/services"><div className='ml-2'>Services</div></a>
            <a href="/about"><div className='ml-4'>About</div></a>
            <a href="/contact"><div className='ml-4'>Contact</div></a>
        </div>
        <div className="hidden lg:flex items-center xl:mr-20">
          <a href="/contact">
          <div className="bg-gray-500 p-2 rounded-full text-white mr-3 border hover:bg-transparent transition duration-200"><BsFillTelephoneFill/></div>  
          </a>
            {number}
        </div>
    </div>
    </>
  )
}

export default Navbar