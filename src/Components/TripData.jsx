import React from 'react'
import "../Styles/Trips.css"


const TripData = ({image, heading,text}) => {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={image} alt="Destination" /> 
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
    </div>
  )
}

export default TripData