import React from 'react'

function Testimonial() {
  return (
    <>
    <div className="flex flex-col font-style pt-28 bg-slate-100 relative">
        <div className="flex flex-col lg:items-center lg:flex-row mx-4 sm:mx-14 lg:mx-28 pb-16">
            <div className="text-2xl font-bold">TESTIMONIALS</div>
            <div className="pt-2 lg:mx-20 xl:mx-36 text-sm text-slate-500">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </div>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 sm:gap-6 mx-4 sm:mx-14 lg:mx-28">
           <div className="flex flex-col bg-white p-10 shadow-lg">
           {/* <img src="https://lh3.googleusercontent.com/Esx28-EQU5GvuTduR55Fa4ylO8ZPNa-Y4-N1HYvYjqjJovF0NFIJsAtBU2k_EZgaynxGdK9BCdj2mu5dL65nXmNaqbwtZUYLdsihBO0" alt=""  className='hidden xl:block w-12 rounded-full object-cover drop-shadow-lg absolute  top-[26vh]'/> */}
            <div className="text-slate-500 py-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            <div className="flex">
                <img src="https://preview.colorlib.com/theme/hotell/images/person_1.jpg" alt="" className='w-16 rounded-full object-cover'/>
                <div className="flex flex-col px-3">
                <div className="">John Doe</div>
                <div className="text-slate-500">Creative Director</div>
                </div>
            </div>
           </div>
           <div className="flex flex-col bg-white p-10 shadow-lg">
           {/* <img src="https://lh3.googleusercontent.com/Esx28-EQU5GvuTduR55Fa4ylO8ZPNa-Y4-N1HYvYjqjJovF0NFIJsAtBU2k_EZgaynxGdK9BCdj2mu5dL65nXmNaqbwtZUYLdsihBO0" alt=""  className='hidden xl:block w-12 rounded-full object-cover drop-shadow-lg absolute top-[26vh]'/> */}
            <div className="text-slate-500 py-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            <div className="flex">
                <img src="https://preview.colorlib.com/theme/hotell/images/person_3.jpg" alt="" className='w-16 rounded-full object-cover'/>
                <div className="flex flex-col px-3">
                <div className="">John Doe</div>
                <div className="">Creative Director</div>
                </div>
            </div>
           </div>
           <div className="hidden xl:flex flex-col bg-white p-10 shadow-lg">
           {/* <img src="https://lh3.googleusercontent.com/Esx28-EQU5GvuTduR55Fa4ylO8ZPNa-Y4-N1HYvYjqjJovF0NFIJsAtBU2k_EZgaynxGdK9BCdj2mu5dL65nXmNaqbwtZUYLdsihBO0" alt=""  className='hidden xl:block w-12 rounded-full object-cover drop-shadow-lg absolute xl:top-[26vh]'/> */}
            <div className="text-slate-500 py-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            <div className="flex">
                <img src="https://preview.colorlib.com/theme/hotell/images/person_2.jpg" alt="" className='w-16 rounded-full object-cover'/>
                <div className="flex flex-col px-3">
                <div className="">John Doe</div>
                <div className="">Creative Director</div>
                </div>
            </div>
           </div>
            
        </div>
        <div className="flex justify-center pb-10 ">
        <button className='border rounded-full mt-10 py-2 px-5 hover:border-black'>Prev</button>
        <button className='border rounded-full mt-10 py-2 px-5 ml-2 hover:border-black'>Next</button>
      </div>
    </div>
    </>
  )
}

export default Testimonial