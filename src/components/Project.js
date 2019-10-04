import React from "react"
import "./Project.css"
import Flick from "../images/projects/Flick.png"
import Pokedex from "../images/projects/Pokedex.png"
import Sprig from "../images/projects/Sprig.png"
import TinyApp from "../images/projects/TinyApp.png"
import ProjectIcon from "../images/sidebar/project.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = () => {
  return (
    <div className="project-section" id="work">
      <div className="section-content">
        <div className="title">
          <h1>PROJECTS</h1>
          <img src={ProjectIcon} alt="projects icon" />
        </div>
        <div className="content">
          <div className="project-columns">
            <a href="https://github.com/cchoi96/sprig" target="_blank">
              <img src={Sprig} className="project-link" />
              {/* 2620 * 1390 */}
            </a>
            <div className="project-info">
              <h2>
                Sprig
                <a href="https://github.com/cchoi96/sprig" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </h2>
              <div className="skills-tag">HTML</div>
              <div className="skills-tag">CSS</div>
              <div className="skills-tag">EJS</div>
              <div className="skills-tag">jQuery</div>
              <div className="skills-tag">SQL</div>
            </div>
          </div>
          <div className="project-columns">
            <a href="https://flickmovies.netlify.com" target="_blank">
              <img src={Flick} className="project-link" />
            </a>
            <div className="project-info">
              <h2>
                Flick
                <a href="https://github.com/cchoi96/flick" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </h2>
              <div className="skills-tag">HTML</div>
              <div className="skills-tag">CSS</div>
              <div className="skills-tag">JS</div>
              <div className="skills-tag">React</div>
            </div>
          </div>
          <div className="project-columns">
            <a href="https://github.com/cchoi96/tinyapp" target="_blank">
              <img src={TinyApp} className="project-link" />
            </a>
            <div className="project-info">
              <h2>
                TinyApp
                <a href="https://github.com/cchoi96/tinyapp" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </h2>
              <div className="skills-tag">HTML</div>
              <div className="skills-tag">CSS</div>
              <div className="skills-tag">EJS</div>
              <div className="skills-tag">jQuery</div>
              <div className="skills-tag">MongoDB</div>
            </div>
          </div>
          <div className="project-columns">
            <a href="https://css-pokedex.netlify.com" target="_blank">
              <img src={Pokedex} className="project-link" />
            </a>
            <div className="project-info">
              <h2>
                Pokédex
                <a href="https://github.com/cchoi96/pokedex" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </h2>
              <div className="skills-tag">HTML</div>
              <div className="skills-tag">CSS</div>
              <div className="skills-tag">JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
