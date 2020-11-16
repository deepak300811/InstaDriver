import React from "react"

function AboutUs() {
  return (
    <>
      <div className="outer-about">
        <div className="container">
          <div id="about">
            <div className="work-options">
              <div className="card white">
                <img
                  src="https://instadriver.co/img/aboutus.svg"
                  alt="aboutus"
                />
                <p>About us</p>
                <p>
                  Learn how useful Instadriver is to both the employer and
                  drivers
                </p>
              </div>
              <div className="card white">
                <img
                  src="https://instadriver.co/img/verify.svg"
                  alt="verifiedSearch"
                />
                <p>Verified Search</p>
                <p>
                  Learn how employers can cut the curve and save a lot by using
                  verified search
                </p>
              </div>
              <div className="card white">
                <img
                  src="https://instadriver.co/img/topadd.svg"
                  alt="Ad Feature"
                />
                <p>Top Ad Feature</p>
                <p>
                  See how top ad feature can increase the odds of a driver
                  getting hired
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-profile bg-cream">
        <div className="inner-div">
          <h2>Driver Profiles posted on Instadriver</h2>
          <div className="box-container">
            <div>
              <h1>108</h1>
              <p>Free Driver Profiles</p>
            </div>
            <div>
              <h1>7</h1>
              <p>Verified Driver Profiles</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
