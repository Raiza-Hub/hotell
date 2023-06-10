import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Section1 from '../components/Section1';
import Services_Section from '../components/Services_Section';
import About_Section from '../components/About_Section';
import Testimonial from '../components/Testimonial';
import Social from '../components/Social';

function Home() {
  return (
    <>
    <div className="bg-desktop bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden">
    <Navbar/>
    <Intro/>
    </div>
    <Section1/>
    <Services_Section/>
    <About_Section/>
    <Testimonial/>
    <Social/>
    </>
  )
}

export default Home