import React from "react"
import "./About.css"

import about from "../images/sidebar/about-me.png"
import css from "../images/skills/css.png"
import git from "../images/skills/git.png"
import html from "../images/skills/html.png"
import javascript from "../images/skills/javascript.png"
import jquery from "../images/skills/jquery.gif"
import mongo from "../images/skills/mongo.png"
import node from "../images/skills/node.png"
import postgres from "../images/skills/postgres.png"
import react from "../images/skills/react.png"
import sass from "../images/skills/sass.png"

const About = () => {
  return (
    <div className="about-section">
      <div className="section-content">
        <div className="title">
          <h1>ABOUT ME</h1>
          <img src={about} alt="about me icon" />
        </div>
        <div className="content">
          <h2>CHRIS CHOI</h2>
          <p>
            As a former biochemist turned full-stack developer, I enjoy learning
            new skills and coming up with solutions to interesting problems.
            <br />I write code in <span>
              HTML, CSS, Javascript, and React.
            </span>{" "}
            I strive to make{" "}
            <span>beautiful, mobile-first web applications</span> with clean,
            re-usable code.
            <br />
            <br />I still have a tremendous amount to learn, but I am extremely
            excited to continue developing into an excellent developer and
            designer.
          </p>
          <img src={html} alt="html icon" />
          <img src={css} alt="css icon" />
          <img src={sass} alt="sass icon" />
          <img src={javascript} alt="javascript icon" />
          <img src={jquery} alt="jquery icon" />
          <img src={react} alt="react icon" />
          <img src={node} alt="node icon" />
          <img src={postgres} alt="postgres icon" />
          <img src={mongo} alt="mongo icon" />
          <img src={git} alt="git icon" />
        </div>
      </div>
    </div>
  )
}

export default About
