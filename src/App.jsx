import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

import curvyBgMobile from "/images/bg-curvy-mobile.svg";

function App() {
  return (
    <div
      className="
        relative text-base leading-base text-white min-h-screen 
        bg-linear-to-b from-navy-850 from-[420px] to-navy-900 to-[420px]
      "
    >
      <img src={curvyBgMobile} className="absolute top-70" />

      <div className="relative px-5 py-6 flex flex-col gap-12 z-10">
        <Header />

        <div className="flex flex-col gap-35">
          <HeroSection />
          <MainSection />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
