import React from 'react'
import Hero from '../src/Components/Hero'
import AboutImg from "../src/assets/Images/christoph-schulz-7tb-b37yHx4-unsplash.jpg" 
import Footer from '../src/Components/Footer'
import Trips from '../src/Components/Trips'
const Service = () => {
  return (
    <div>
      <Hero
      cName="hero-mid" 
      heroImg={AboutImg}
      heroAlt="alternative img"
      title="Services" 
      url="/services"
      btnText="Travel Plans"
      btnClass="show"
      />
      <Trips/>
      <Footer/>

   </div>
  )
}



 
export default Service