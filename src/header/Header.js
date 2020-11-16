import React, { useState, useEffect } from "react"
import Overlay from "../menu/Menu"

function Header(props) {
  // const val = props.compShallOpen
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    setIsOpen(props.compShallOpen)
  }, [props])
  return (
    <>
      <Overlay shallOpen={isOpen} />
      <div id="outer-header">
        <div id="inner-header" className="container">
          <img src="https://instadriver.co/img/logo.svg" alt="logo" />
          <div className="menu">
            <p>Menu </p>
            <img
              src="https://instadriver.co/img/menu.svg"
              alt="logo"
              onClick={handleOpenMenu}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="gap-class">
          <div>
            <div>
              <img src="https://instadriver.co/img/message.svg" alt="logo" />
              <span style={{ fontSize: "16px" }}>
                {" "}
                saysomething@instadriver.co{" "}
              </span>
            </div>
          </div>
        </div>
        <div id="hero">
          <div className="container">
            <div className="register-form">
              <div className="left">
                <div>
                  <h3>
                    Find and Hire A Driver. It's Free and No Login Required
                  </h3>
                  <form>
                    <div className="input-controls">
                      <select
                        className="select-style"
                        id="category"
                        name="category"
                      >
                        <option value="">Select Category</option>
                        <option value="Personal Driver">Personal Driver</option>
                        <option value="Public Commuter Driver (e.g. Bus, Ambulance)">
                          Public Commuter Driver (e.g. Bus, Ambulance)
                        </option>
                        <option value="Ride-Sharing Driver e.g Uber, Taxify">
                          Ride-Sharing Driver e.g Uber, Taxify
                        </option>
                        <option value="School Bus Driver">
                          School Bus Driver
                        </option>
                        <option value="Truck Driver">Truck Driver</option>
                        <option value="On-Demand Driver">
                          On-Demand Driver
                        </option>
                      </select>
                    </div>
                    <div className="input-controls">
                      {/* <input type="location" name="location" id="location" /> */}
                    </div>

                    <div className="input-controls">
                      <select id="type" name="type" classname="select-style">
                        <option value="">Select Search Type</option>
                        <option value="Search All Drivers">
                          Search All Drivers
                        </option>
                        <option value="Search Verified Drivers">
                          Search Verified Drivers
                        </option>
                      </select>
                    </div>
                    <div className="input-controls">
                      <div className="action-group">
                        <img
                          src="https://instadriver.co/img/filter.svg"
                          alt="filter"
                        />
                        <button className="btn">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
