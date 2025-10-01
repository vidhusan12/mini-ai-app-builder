import React from 'react'
import "./Hero.css";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()

  const handleStartBuilding = () => {
    navigate("/build")
  }
  return (
    <section className='hero'>
      <h1 className='hero-title'>Welcome to the Mini AI App Builder</h1>
      <p className='hero-desc'>
        Quickly generate powerful AI apps by describing your idea in just a few words. Give it a try and see how easy app creation can be!
      </p>
      <div className="hero-btns">
        <button className='hero-btn primary' onClick={handleStartBuilding}>Start Building</button>
      </div>
    </section>
  )
}

export default Hero