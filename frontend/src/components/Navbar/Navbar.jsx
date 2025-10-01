import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = ({showButton = true, title ="Mini AI App Builder"}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/build")
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">{title}</div>
      {showButton && <button className="navbar-btn" onClick={handleClick}>Get Started</button>}
    </nav>
  );
}

export default Navbar