import React from 'react'
import Hero from '../src/Components/Hero'
import AboutImg from "../src/assets/Images/christoph-schulz-7tb-b37yHx4-unsplash.jpg" 
import Footer from '../src/Components/Footer'
import AboutUs from '../src/Components/AboutUs'

const About = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        // style={{ color: "#222" }}
        heroImg={AboutImg}
        heroAlt="alternative img"
        title="About us"
        url="/about"
        btnText="Travel Plans"
        btnClass="show" />
      <AboutUs/>
    <Footer />
    </>
  )
}

export default About