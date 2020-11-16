import React, { useEffect, useState } from "react"
import CloseIcon from "@material-ui/icons/Close"
function Menu({ shallOpen, closeMenu }) {
  const [status, setStatus] = useState()
  const handleClose = () => {
    setStatus(false)
    closeMenu()
  }

  useEffect(() => {
    setStatus(shallOpen)
  }, [shallOpen])
  return (
    <>
      {status ? (
        <div id="overlay">
          <ul>
            <li> Home</li>
            <li>About InstaDriver</li>
            <li>Verified Search (For Employers &amp; Drivers)</li>
            <li>Top Ad Feature (For Drivers)</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li onClick={handleClose}>
              <span id="cross">
                {" "}
                <CloseIcon /> <span className="text">Close</span>
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  )
}

export default Menu
