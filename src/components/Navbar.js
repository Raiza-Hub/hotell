import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {CgMenuGridO} from 'react-icons/cg'

function Navbar() {
    const number = 9063611541
  return (
    <>
    <div className="flex justify-between items-center lg:mx-24 m-6 p-4 font-style sticky top-0">
    <div className='text-2xl'>Hotell</div>
        <CgMenuGridO className='lg:hidden' fontSize={30}/>
        <div className="hidden lg:flex  xl:ml-20">
            <div className='ml-4'>Home</div>
            <div className="flex items-center  ml-4">
            Destination
            <div className="ml-1"><RiArrowDropDownLine/> </div>
            </div>
            <div className='ml-4'>Services</div>
            <div className='ml-4'>About</div>
            <div className='ml-4'>Contact</div>
        </div>
        <div className="hidden lg:flex items-center xl:mr-20">
          <div className="bg-slate-50 p-2 rounded-full text-black mr-3 border hover:bg-transparent hover:text-white transition duration-200"><BsFillTelephoneFill className=''/></div>  
            {number}
        </div>
    </div>
    </>
  )
}

export default Navbar