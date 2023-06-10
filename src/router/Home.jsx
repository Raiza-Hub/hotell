import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Section1 from '../components/Section1';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import Testimonial from '../components/Testimonial';
import Social from '../components/Social';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <div className="bg-desktop bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden">
    <Navbar/>
    <Intro/>
    </div>
    <Section1/>
    <ServicesSection/>
    <AboutSection/>
    <Testimonial/>
    <Social/>
    <Footer/>
    </>
  )
}

export default Home