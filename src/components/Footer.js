import React from "react"
import "./Footer.css"

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <div className="footer-section">
      <div className="section-content">
        <p>&copy; {year} Chris Choi</p>
      </div>
    </div>
  )
}

export default Footer
