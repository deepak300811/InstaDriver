import "./App.css"
import "./header/Header"
import Header from "./header/Header"
import HowItWorks from "./howItWorks/HowItWorks"
import AboutUs from "./about-us/AboutUs"
import Footer from "./footer/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <HowItWorks />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
