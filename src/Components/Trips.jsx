import React from 'react'
import "../Styles/Trips.css"
import trip1 from "/src/assets/3.jpg"
import trip2 from "/src/assets/img.jpg"
import trip3 from "/src/assets/11.jpg"
import TripData from './TripData'
const Trips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">

     
      <TripData
      heading="Paris"
      text="If you are romantic and are looking for a unique stay in one of the most beautiful European cities for your honeymoon or to celebrate a wedding anniversary, you should definitely book your holiday in Paris. With its sumptuous hotels Paris is one of the most beautiful destinations in Europe for a honeymoon."
image={trip1}

      />
            <TripData
      heading="Paris"
      text="If you are romantic and are looking for a unique stay in one of the most beautiful European cities for your honeymoon or to celebrate a wedding anniversary, you should definitely book your holiday in Paris. With its sumptuous hotels Paris is one of the most beautiful destinations in Europe for a honeymoon."

image={trip2}

      />
            <TripData
      heading="Paris"
      text="If you are romantic and are looking for a unique stay in one of the most beautiful European cities for your honeymoon or to celebrate a wedding anniversary, you should definitely book your holiday in Paris. With its sumptuous hotels Paris is one of the most beautiful destinations in Europe for a honeymoon."
image={trip3}
      />

</div>
    </div>
  )
}

export default Trips