// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "../styles/main.css"

// Header goes here
const Header = ({ siteTitle }) => {
  // Method to get current time in HH:MM:SS
  const getCurrentTime = () => {
    let current = new Date()
    let hours = current.getHours()
    let minutes = current.getMinutes()
    let seconds = current.getSeconds()
    hours = updateTime(hours)
    minutes = updateTime(minutes)
    seconds = updateTime(seconds)

    let time =
      hours > 12
        ? hours < 22
          ? "0" + (hours - 12) + " : " + minutes + " : " + seconds + " " + "PM"
          : hours - 12 + " : " + minutes + " : " + seconds + " " + "PM"
        : hours + " : " + minutes + " : " + seconds + " " + "AM"
    // console.log(time)
    return time
  }
  // Update time each time
  const updateTime = time => {
    if (time < 10) {
      return "0" + time
    } else {
      return time
    }
  }

  const [time, setTime] = useState(getCurrentTime())

  useEffect(() => {
    setInterval(() => {
      tick()
    }, 500)
  }, [])

  const tick = () => {
    setTime(getCurrentTime())
  }

  return (
    <header>
      <div className="grid grid-cols-2 divide-gray-400 my-3">
        <div className="site_title text-xl text-white p-2">{siteTitle}</div>
        <div className="site_date_time text-xl text-white text-right">
          <nav className="w-1/2 p-2 flex float-right nav">
            <div className="w-1/5 h-12 text-left">{time.slice(0, 4)}</div>
            <div className="w-1/5 h-12 text-left -mx-2">{time.slice(4, 9)}</div>
            <div className="w-1/5 h-12 text-left">{time.slice(9, 13)}</div>
            <div className="w-1/5 h-12 text-left -mx-5">
              {time.slice(13, 15)}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
