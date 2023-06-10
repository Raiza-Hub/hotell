import React from 'react'

function Social() {
  return (
    <>
    <div className="flex flex-col font-style pt-28 bg-white relative">
        <div className="flex flex-col lg:items-center lg:flex-row mx-4 sm:mx-14 lg:mx-28 pb-16">
            <div className="text-2xl font-bold">INSTAGRAM</div>
            <div className="pt-2 lg:mx-20 xl:mx-36 text-sm text-slate-500">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mx-4 sm:mx-14 lg:mx-28">
           <img src="https://preview.colorlib.com/theme/hotell/images/img_3.jpg" alt="" />
           <img src="https://preview.colorlib.com/theme/hotell/images/img_1.jpg" alt="" />
           <img src="https://preview.colorlib.com/theme/hotell/images/img_4.jpg" alt="" />
           <img src="https://preview.colorlib.com/theme/hotell/images/img_3.jpg" alt=""  className='md:hidden lg:flex'/>
            
        </div>
        <div className="flex justify-center">
        <button className='border rounded-full mt-10 py-2 px-5 hover:border-black'>Prev</button>
        <button className='border rounded-full mt-10 py-2 px-5 ml-2 hover:border-black'>Next</button>
      </div>
    </div>
    </>
  )
}

export default Social