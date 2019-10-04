import React from "react"
import "./Nav.css"
import logo from "../images/Logo.png"

const Nav = () => {
  return (
    <nav className="navbar">
      <div id="logo">
        <img src={logo} alt="personal logo" />
      </div>
      <ul>
        <li className="navbar-center">
          <a href="#work">WORK</a>
        </li>
        <li className="navbar-center">
          <a href="#about">ABOUT</a>
        </li>
        <li className="navbar-right">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
