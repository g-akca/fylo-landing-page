import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base min-h-screen bg-navy-850">
      <div>
        <Header />
        <MainSection />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
