import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

import curvyBgMobile from "/images/bg-curvy-mobile.svg";
import curvyBgDesktop from "/images/bg-curvy-desktop.svg";

function App() {
  return (
    <div
      className="
        relative text-base leading-base text-white min-h-screen 
        bg-linear-to-b from-navy-850 from-[408px] to-navy-900 to-[408px]
        tablet:from-[1240px] tablet:to-[1240px]
      "
    >
      <div className="absolute top-70 tablet:top-207.5 w-full h-35.25 tablet:h-112.25 overflow-hidden">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={curvyBgDesktop}
          />
          <img
            src={curvyBgMobile}
            className="absolute top-0 right-0 w-93.75 tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-360 desktop:right-0 desktop:left-auto desktop:translate-x-0 max-w-none"
          />
        </picture>
      </div>

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
