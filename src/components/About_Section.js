import React from 'react'

function About_Section() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-64 lg:gap-24 font-style">
        <div className="lg:mt-[35vh] xl:mt-[28vh] relative md:mt-[96vh] mt-[150vh] sm:mt-[130vh] ">
            <div className=" w-60  xl:w-96 h-[80vh]  bg-slate-400"></div>
    <img src="https://preview.colorlib.com/theme/hotell/images/about_1.jpg" alt=""  className=' absolute inset-y-32 inset-x-4 md:inset-y-20 md:inset-x-14  lg:inset-x-10 rounded-md drop-shadow-xl  w-[90vw] sm:w-[80vw] md:w-[65vw]'/>
        </div>
        <div className="mt-[-25vh] lg:mt-[50vh] xl:mt-[46vh] mx-16 xl:mx-[8.2rem] ">
            <div className="text-xl font-extrabold py-5">ABOUT HOTELL</div>
            <div className="flex flex-col items-center text-sm text-slate-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            <span className='block mt-3'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </span>
            </div>
            <button className='hidden xl:flex rounded-lg py-2 px-4 mt-8 border-2  hover:bg-white hover:text-black transition duration-300'>Get Started</button>
        </div>
    </div>
  )
}

export default About_Section