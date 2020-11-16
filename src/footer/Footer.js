import React from "react"

function Footer() {
  return (
    <>
      <div className="outer-footer">
        <div className="container">
          <div className="footer-logo">
            <img src="https://instadriver.co/img/footerlogo.svg" alt="" />
          </div>
          <div id="footer-info">
            <div className="useful-links">
              <ul>
                <li>Useful links</li>
                <li>About InstaDriver</li>
                <li>Verified Search (For Employers &amp; Drivers)</li>
                <li>Top Ad Feature (For Drivers)</li>
              </ul>
            </div>
            <div className="useful-links">
              <ul>
                <li>Useful links</li>
                <li>Driver Sign in</li>
                <li>Driver Sign Up</li>
                <li>Employer Sign in</li>
                <li>Employer Sign up</li>
              </ul>
            </div>
            <div className="useful-links">
              <ul>
                <li>Useful links</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
            <div className="social-media useful-links">
              <ul>
                <li>Social Media</li>
                <li>
                  <div className="social-div">
                    <a
                      href="https://www.facebook.com/instadrivers"
                      rel="noopener"
                    >
                      <img
                        src="https://instadriver.co/img/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                    <a href="https://twitter.com/Instadriver1" rel="noopener">
                      <img
                        src="https://instadriver.co/img/twitter.svg"
                        alt="twitter"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"
                      rel="noopener"
                    >
                      <img
                        src="https://instadriver.co/img/youtube.svg"
                        alt="facebook"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/instadriverx/"
                      rel="noopener"
                    >
                      <img
                        src="https://instadriver.co/img/instagram.svg"
                        alt="facebook"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-info useful-links">
              <ul>
                <li>Contact Info</li>
                <li>saysomething@instadriver.co</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
