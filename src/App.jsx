import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base text-white min-h-screen bg-navy-850">
      <div className="px-5 py-6 flex flex-col gap-12">
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
