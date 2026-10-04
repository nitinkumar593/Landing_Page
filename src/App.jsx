import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import TestingMonials from "./components/TestingMonials";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { Toaster } from "sonner";

function Home() {
  return (
    <>

      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <TestingMonials />
        <Footer />
      </div>
    </>


  );
}

function App() {
  return (
    <>
      <Toaster position="top-right" closeButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;