import React, { Fragment } from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
