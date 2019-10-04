import React, { useEffect } from "react"
import "./Home.css"
import $ from "jquery"

const Home = () => {
  useEffect(() => {
    let app = {}

    app.init = () => {
      app.heroAnimation()
      setInterval(() => {
        app.heroAnimation()
      }, 100000)
    }

    app.heroAnimation = function() {
      if ($(window).width() > 720) {
        app.renderHero("CHRIS CHOI", 0)
        app.windowResizeHeroListener()
      } else {
        app.heroResize()
        $(".home-section h2").css("transform", "none")
        $(".home-section h2").css("opacity", "1.0")
        app.windowResizeHeroListener()
      }
    }

    app.heroResize = () => {
      if ($(window).width() < 350) {
        $("#hero-animation").html("CC")
      } else {
        $("#hero-animation").html("CHRIS CHOI")
      }
    }

    app.windowResizeHeroListener = () => {
      $(window).resize(() => {
        app.heroResize()
      })
    }

    app.renderHero = (str, index) => {
      let alphabetIndex = str.charCodeAt(index) - 64
      let speed = 60 + (0.1 / alphabetIndex) * 0.6
      if (index >= str.length) {
        $("#hero-animation span").remove()
        $(".home-section h2").css("transform", "none")
        $(".home-section h2").css("opacity", "1.0")
        return
      }
      let i = 65
      let intervalId = setInterval(function() {
        let temp = String.fromCharCode(i)
        $("#hero-animation span").html(temp)
        if (temp === str[index] || i >= 72 || str[index] === " ") {
          $("#hero-animation").html(`${str.slice(0, index + 1)}<span></span>`)
          clearInterval(intervalId)
          app.renderHero(str, index + 1)
        }
        i++
      }, speed)
    }
    app.init()

    return function cleanup() {
      app = {}
    }
  }, [])

  return (
    <div className="home-section">
      <div className="section-content">
        <h2 className="home-description">FULL-STACK DEVELOPER</h2>
        <h1 id="hero-animation"></h1>
        <p>
          Hey there! I am a Toronto-based{" "}
          <a href="https://github.com/cchoi96" target="_blank">
            {" "}
            <span className="description-span">full-stack developer</span>
          </a>
          , Ethiopian coffee enthusiast, and life-long Tottenham Hotspur
          supporter.
        </p>
      </div>
    </div>
  )
}

export default Home
