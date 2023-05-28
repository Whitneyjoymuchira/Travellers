import React from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = ({cName,heroImg,heroAlt,title,text,url,btnClass,btnText}) => {
  return (
    <div className="hero">
        {/* "src/assets/Images/neom-aWHKsYkbCi8-unsplash.jpg"  */}
      <img src={heroImg}alt={heroAlt} />

      <div className={cName}>
        <h1>{title}</h1> 
        <p>{text}</p>
        <Link to={url} className={btnClass}>
           {btnText}
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
