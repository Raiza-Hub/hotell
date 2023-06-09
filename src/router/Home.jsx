import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';

function Home() {
  return (
    <>
    <div className="bg-desktop bg-no-repeat bg-cover w-[100%]">
    <Navbar/>
    <Intro/>
    </div>
    </>
  )
}

export default Home