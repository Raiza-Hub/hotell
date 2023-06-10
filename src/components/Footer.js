import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-4 py-28  font-style bg-slate-100">
        <div className="sm:px-16">
            <div className="">Home</div>
            <a href="/"><div className="text-slate-500 hover:text-black">About us</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Places</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Services</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Destination</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Terms</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Privacy</div></a>
        </div>
        <div className="sm:px-16">
            <div className="">Practice Area</div>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Travel</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Popular places</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Destination</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Tour</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Family Vacation</div></a>
        </div>
        <div className="sm:px-16 pt-10 lg:pt-0">
            <div className="">Services</div>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Tour</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Swimming</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Kayak</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">Surfing</div></a>
        </div>
        <div className="pt-10 lg:pt-0 sm:pl-16 lg:pr-20">
            <div className="">Contact</div>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">43 Raymouth Rd. Baltemoer, London 3910</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">+1(123)-456-7890</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">+1(123)-456-7890</div></a>
            <a href="/"><div className="text-slate-500 hover:text-black transition duration-200 pt-2 text-sm">info@mydomain.com</div></a>
            <div className="">
            <div className="">Connect</div>
            <div className="flex pt-3">
            <FiInstagram className='mr-2 cursor-pointer hover:border'fontSize={19}/>
            <BsFacebook className='ml-3 cursor-pointer hover:border'fontSize={19}/>            
            <BsTwitter className='ml-5 cursor-pointer hover:border'fontSize={19}/>
            </div>
            </div>        
        </div>

    </div>
        <div className="flex justify-end  bg-slate-100 font-bold font-style">Powered By Raiza-Hub</div>
    
    </>
  )
}

export default Footer