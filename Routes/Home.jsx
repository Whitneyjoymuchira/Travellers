import React from 'react'
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import Destination from '../src/Components/Destination'
import Trips from '../src/Components/Trips'
import Footer from '../src/Components/Footer'
import HeroImage from '/src/assets/Images/neom-aWHKsYkbCi8-unsplash.jpg'

function Home() {
  return (
    <div>
  
      <Hero
      cName="hero-text"
      title="Not all who wander are lost"
      text="Choose Your Favourite Destinations"
      heroImg={HeroImage} 
      heroAlt="alternative img"
      url="/about"
      btnText="Travel Plans"
      btnClass="show"
      />
      
      
    <Destination/>
    <Trips />
    <Footer/>
     </div>
  )
}

export default Home