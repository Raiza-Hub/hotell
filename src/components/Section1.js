import React from 'react'

function Section1() {
  return (
    <>
    <div className="absolute top-[85vh] w-[100%]">
    <div className="flex flex-col lg:flex-row justify-around mx-0 sm:mx-16 md:mx-10 lg:mx-5 xl:mx-10 m-4 p-9 bg-white overflow-hidden shadow-xl z-10 rounded-sm ">
        <input type="text" name="dateArrival" id="dateArrival" placeholder='Date Arrival' className='inputfield mx-2'/>
        <input type="text" name="dateDeparture" id="dateDeparture" placeholder='Date Departure' className='inputfield mx-2'/>
        <input type="text" name="person" id="person" placeholder='# of Person' className='inputfield mx-2'/>
        <button className='rounded-full bg-lime-400 lg:px-10 xl:px-20 text-white ml-2 py-3 lg:py-0'>Find now</button>
    </div>
    </div>
    </>
  )
}

export default Section1