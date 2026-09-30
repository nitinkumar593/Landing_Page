import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import TestingMonials from "./components/TestingMonials"
import Footer from "./components/Footer"
function App() {

  return (
  <>
   <NavBar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSection/>
       <FeatureSection/>
       <WorkFlow/>
       <Pricing/>
       <TestingMonials/>
       <Footer/>
   </div>
  </>
  )
}

export default App
