import React from "react"
import "./Project.css"
import Flick from "../images/projects/Flick.png"
import Pokedex from "../images/projects/Pokedex.png"
import ProjectIcon from "../images/sidebar/project.png"

const Project = () => {
  return (
    <div class="project-section">
      <div class="section-content">
        <div class="title">
          <h1>PROJECTS</h1>
          <img src={ProjectIcon} alt="projects icon" />
        </div>
        <div class="content">
          <div>
            <div class="project-columns">
              <a href="https://musing-wing-5d5506.netlify.com" target="_blank">
                <img src={Flick} class="project-link" />
              </a>
              <div class="project-info">
                <h2>
                  Flick
                  <a href="https://github.com/cchoi96/flick" target="_blank">
                    <i class="fab fa-github project-icon"></i>
                  </a>
                </h2>
                <div class="skills-tag">HTML</div>
                <div class="skills-tag">CSS</div>
                <div class="skills-tag">JS</div>
                <div class="skills-tag">React</div>
              </div>
            </div>
            <div class="project-columns">
              <a href="https://angry-hugle-91dd56.netlify.com" target="_blank">
                <img src={Pokedex} class="project-link" />
              </a>
              <div class="project-info">
                <h2>
                  Pokédex
                  <a href="https://github.com/cchoi96/pokedex" target="_blank">
                    <i class="fab fa-github project-icon"></i>
                  </a>
                </h2>
                <div class="skills-tag">HTML</div>
                <div class="skills-tag">CSS</div>
                <div class="skills-tag">JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
