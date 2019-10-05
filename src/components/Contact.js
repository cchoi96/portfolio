import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import contact from "../images/sidebar/contact.png"

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="section-content">
        <div className="title">
          <h1>LET'S TALK</h1>
          <img src={contact} alt="contact icon" />
        </div>
        <div className="content">
          <div>
            <p>
              I would love to chat with you about my code, my life, or where to
              find the best burger in Toronto (currently Rudy).
              <br />
              <br /> Feel free to reach out!
            </p>
            <a href="mailto:chrischoi96@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </a>
            <a href="https://github.com/cchoi96" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-choi-98661598/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
