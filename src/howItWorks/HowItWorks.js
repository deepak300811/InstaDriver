import React, { useRef, useEffect } from "react"

function HowItWorks() {
  const linkDriver = useRef()
  const linkEmployee = useRef()

  useEffect(() => {
    linkEmployee.current.classList.remove("unshow")
    document.getElementById("empee").classList.add("btnYes")
    linkDriver.current.classList.add("unshow")
    document.getElementById("drive").classList.remove("btnYes")
  }, [])
  const handleClickDriver = e => {
    e.preventDefault()
    console.log(linkDriver.current.id)
    linkEmployee.current.classList.add("unshow")
    document.getElementById("drive").classList.add("btnYes")
    document.getElementById("empee").classList.remove("btnYes")
    // linkEmployee.current.classList.add("btnYes")
    linkDriver.current.classList.remove("unshow")
  }

  const handleClickEmployee = e => {
    e.preventDefault()
    // console.log(e)
    console.log(linkEmployee.current.id)
    linkEmployee.current.classList.remove("unshow")
    // linkDriver.current.classList.add("btnYes")
    document.getElementById("empee").classList.add("btnYes")
    document.getElementById("drive").classList.remove("btnYes")

    linkDriver.current.classList.add("unshow")
  }
  return (
    <>
      <div id="outer-how-it-works">
        <div className="container">
          <div id="how-it-outer">
            <div className="Heading-how">
              <p>How it works</p>
              <span>
                <img
                  src="https://instadriver.co/img/ocean-waves.png"
                  alt="wave"
                />
              </span>
            </div>
            <div className="toggle-btn-group">
              <a
                className="makeBtn"
                href="/"
                id="empee"
                onClick={e => handleClickEmployee(e)}
              >
                For Employers
              </a>
              <a
                className="makeBtn"
                href="/"
                id="drive"
                onClick={e => handleClickDriver(e)}
              >
                For Drivers
              </a>
            </div>
            <div className="work-options" id="forEmployers" ref={linkEmployee}>
              <div className="card">
                <img
                  src="https://instadriver.co/img/searchdriver.svg"
                  alt="search"
                />
                <p>Search Drivers</p>
                <p>
                  Visit Instadriver platform, select the driver category you
                  want, choose the location of the driver and you can either
                  select all drivers or verified drivers and press search
                  button.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://instadriver.co/img/calldriver.svg"
                  alt="search"
                />
                <p>Call Driver</p>
                <p>
                  After hitting search button, you will see summarised profiles
                  of the drivers with their contacts. Click view profile, to
                  read the full profile. Access the contact number and call the
                  driver.
                </p>
              </div>
              <div className="card">
                <img
                  src=" https://instadriver.co/img/hiredriver.svg"
                  alt="search"
                />
                <p>Hire Drivers</p>
                <p>
                  On the call, discuss the job opportunity, terms and
                  conditions, or arrange a meetup to discuss further and if you
                  are both a perfect fit, proceed to hire that driver. As simple
                  as that.
                </p>
              </div>
            </div>

            <div className="work-options" id="forDrivers" ref={linkDriver}>
              <div className="card">
                <img
                  src="https://instadriver.co/img/searchdriver.svg"
                  alt="search"
                />
                <p>Post Profile</p>
                <p>
                  As a driver, all you need to do is to create an account with
                  Instadriver, go to your profile page and update your profile.
                  Once you post your profile, employers will be able to find
                  you.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://instadriver.co/img/calldriver.svg"
                  alt="search"
                />
                <p>Employers find you and call you</p>
                <p>
                  Employers normally come to Instadriver to find and hire
                  drivers. Employers will be able to view your profile, and if
                  they are impressed, they will call you and you instantly get a
                  driving job.
                </p>
              </div>
              <div className="card">
                <img
                  src=" https://instadriver.co/img/hiredriver.svg"
                  alt="search"
                />
                <p>And you get hired</p>
                <p>
                  Instadriver is the best and reliable platform for drivers to
                  get hired. When it comes to looking for drivers, employers
                  only know of Instadriver. Leverage Instadriver to get a good
                  job.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="emp-drive">
          <div className="lefty">
            <div className="card">
              <img src="https://instadriver.co/img/employees.svg" alt="emp" />
              <div className="Heading-how">
                <h3 style={{ margin: ".5rem" }}>Employers!</h3>
                <span>
                  <img
                    src="https://instadriver.co/img/ocean-waves.png"
                    alt="wave"
                  />
                  <p className="small">
                    You don’t have to waste money posting vacancy Ads. Stop
                    posting vacancy ads on whatsapp groups and on social media.
                    Stop making desperate hires because you have few choices.
                    Stop nagging your friends to find you a driver. Get your
                    driver from Instadriver and it is free. At Instadriver, you
                    have a long list to choose a competent driver. Go to search
                    bar, select the driver category you want, choose the
                    location of the driver and press search button. Pick the
                    driver you want. It is that simple and instantaneous.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="righty">
            <div className="card">
              <img src="https://instadriver.co/img/drivers.svg" alt="driver" />
              <div className="Heading-how">
                <h3 style={{ margin: ".5rem" }}>Drivers!</h3>
                <span>
                  <img
                    src="https://instadriver.co/img/ocean-waves-white.png"
                    alt="wave"
                  />
                  <p className="small white">
                    This is a platform to get employed faster and effortlessly.
                    It is not fun staying unemployed. You don’t have to toil
                    asking your relatives, friends and acquaintances to find you
                    a job. Get a job instantly. Just post your profile on
                    Instadriver and employers will find you instantaneously. You
                    can increase your visibility and increase the odds of
                    getting hired by using the Verified Feature and the Top Add
                    Feature. To create your profile for free, click here. This
                    is how millennials and Gen Z find employment.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
