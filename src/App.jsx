import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Top from "./components/Top"
import DonationSection from "./components/DonationSection"
import SpecialSeva from "./components/SpecialSeva"
import Moments from "./components/Moments"
import QuoteSection from "./components/QuoteSection"
import Impact from "./components/Impact"
import Working from "./components/Working"
import VideoSection from "./components/VideoSection.jsx"
import MealSection from "./components/MealSection.jsx"
import AboutSection from "./components/AboutSection.jsx"
import TrustSection from "./components/TrustSection.jsx"
import StoriesSection from "./components/StoriesSection.jsx"
// import HospitalsSection from "./components/HospitalSection.jsx"
import Final from "./components/Final.jsx"
import FAQsection from "./components/FAQsection.jsx"
import Footer from "./components/Footer.jsx"
function App() {


  return (
    <>
      <Top />
      <Navbar />
      <Hero />
      <DonationSection />
      <SpecialSeva />
      <Moments />
      <QuoteSection />
      <Impact />
      <Working />
      <VideoSection />
      <MealSection />
      <AboutSection />
      <TrustSection />
      {/* <HospitalsSection /> */}
      <StoriesSection />
      <Final />
      <FAQsection />
      <Footer />
    </>
  )
}

export default App
