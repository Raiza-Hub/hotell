import React from 'react'

function Section1() {
  return (
    <>
    <div className="absolute top-[85vh] w-[100%] shadow-xl">
    <div className="flex justify-around mx-10 m-4 bg-rose-300 p-7 overflow-hidden">
        <input type="text" name="dateArrival" id="dateArrival" placeholder='Date Arrival' className='inputfield' size={25}/>
        <input type="text" name="dateDeparture" id="dateDeparture" placeholder='Date Departure' className='inputfield' size={25}/>
        <input type="text" name="person" id="person" placeholder='# of Person' className='inputfield' size={25}/>
        <button className='rounded-full bg-lime-400 px-20 text-white'>Find now</button>
    </div>
    </div>
    </>
  )
}

export default Section1