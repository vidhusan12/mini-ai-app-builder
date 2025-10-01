import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Let your imagination go free!</h2>
      <div className="rocket-container">
        {/* Simple SVG rocket; you can replace with your own or an emoji */}
        <svg
          className="rocket"
          width="50"
          height="50"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path d="M32 2 L38 22 L32 18 L26 22 Z" fill="#d32f2f" />
          <rect x="29" y="22" width="6" height="24" rx="3" fill="#1976d2" />
          <circle cx="32" cy="32" r="4" fill="#fff" />
          <rect x="30" y="46" width="4" height="10" rx="2" fill="#ffb300" />
        </svg>
        <span className="rocket-shadow"></span>
      </div>
    </footer>
  )
}

export default Footer