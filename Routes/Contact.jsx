
import React from 'react'
import Hero from '../src/Components/Hero'
import AboutImg from "../src/assets/Images/christoph-schulz-7tb-b37yHx4-unsplash.jpg" 
import Footer from '../src/Components/Footer'
import ContactUs from '../src/Components/ContactUs'

const Contact = () => {
  return (
    <>
    <div>
      <Hero
      cName="hero-mid" 
      // style={{ color: "#222" }}
      heroImg={AboutImg}
      heroAlt="alternative img"
      title="Contacts" 
      url="/contacts"
      btnText="Travel Plans"
      btnClass="show"
      />

   </div>
   <ContactUs />
 <Footer/>
 
   </>
  )
}

export default Contact