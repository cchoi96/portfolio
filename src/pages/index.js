import React, { Fragment } from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Home />
      <Project />
      <About />
    </Fragment>
  )
}

export default App
