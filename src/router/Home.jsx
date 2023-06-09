import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Section1 from '../components/Section1';

function Home() {
  return (
    <>
    <div className="bg-desktop bg-no-repeat bg-cover">
    <Navbar/>
    <Intro/>
    </div>
    <Section1/>
    </>
  )
}

export default Home