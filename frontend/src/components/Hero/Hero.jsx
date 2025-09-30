import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <h1 className='hero-title'>Welcome to the Mini AI App Builder</h1>
      <p className='hero-desc'>
        Quickly generate powerful AI apps by describing your idea in just a few words. Give it a try and see how easy app creation can be!
      </p>
      <div className="hero-btns">
        <button className='hero-btn primary'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero