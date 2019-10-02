import React from "react"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="navbar">
      <div id="logo">
        <h1>CC</h1>
      </div>
      <ul>
        <li className="navbar-center">
          <a href="#work">WORK</a>
        </li>
        <li className="navbar-center">
          <a href="#intro">ABOUT</a>
        </li>
        <li className="navbar-right">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
