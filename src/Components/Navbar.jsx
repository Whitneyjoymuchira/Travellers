import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Navbar.css";
import {MenuItems} from "./MenuItems";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleBars = () => {
    setMenu(!menu);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="logo">Travellers</h1>
      <div className="menu-icons">
        <i className={menu ? "fas fa-times" : "fas fa-bars"} onClick={toggleBars}></i>
      </div>
      <ul className={menu ? "nav-menu active" :"nav-menu"}>
      {/* <ul className="nav-menu"> */}
        {MenuItems.map((item, index) => {
          return(
          <li
          key={index}>
          <Link className={item.cName} to={item.url} >
            <i className={item.icon}></i>
            {item.title}
            {/* <Link to={item.url}></Link> */}
            </Link>
          </li>
          )
})}
        <button>Sign up </button>
      </ul>
    </nav>
  );
};

export default Navbar;
