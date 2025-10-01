import React from "react";
import "./Navbar.css"


const Navbar = ({showButton = true, title ="Mini AI App Builder"}) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">{title}</div>
      {showButton && <button className="navbar-btn">Get Started</button>}
    </nav>
  );
}

export default Navbar