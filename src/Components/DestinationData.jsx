import React from "react";
import DestinationImage1 from  "/src/assets/6.jpg" ;
import DestinationImage2 from "/src/assets/Images/ryan-spencer-XGKaRnWjv1c-unsplash.jpg";
import "../Styles/Destination.css";

function DestinationData({text,heading,image1,image2,className}) {
  return (
    <div className={className}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>
          {text}
        </p>
      </div>
      <div className="image">
        <img src={image1} alt="Beautifull Bali beaches" />
        <img src={image2} alt="Beautiful Bali beaches" />
      </div>
    </div>
  );
}

export default DestinationData;
