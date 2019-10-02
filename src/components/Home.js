import React from "react"
import "./Home.css"

const Home = () => {
  return (
    <div class="home-section">
      <div class="section-content">
        <h1>FULL-STACK DEVELOPER</h1>
        <p>
          Hey, my name is{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/chris-choi-98661598/"
              target="_blank"
            >
              <b> Chris</b>
            </a>
          </span>
          , and I am a{" "}
          <a href="https://github.com/cchoi96" target="_blank">
            {" "}
            <span>full-stack developer</span>
          </a>
          , Ethiopian coffee enthusiast, and life-long Tottenham Hotspur
          supporter.
        </p>
      </div>
    </div>
  )
}

export default Home
