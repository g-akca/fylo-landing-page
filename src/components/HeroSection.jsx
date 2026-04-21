import introImg from "/images/illustration-intro.png";

function HeroSection() {
  return (
    <section className="px-1.25 flex flex-col gap-18 items-center">
      <img src={introImg} alt="Intro illustration" className="px-2.75" />

      <div className="text-center flex flex-col items-center gap-6">
        <h2 className="font-raleway text-[20px] leading-[120%] font-bold">All your files in one secure location, accessible anywhere.</h2>

        <p className="px-3.75">
          Fylo stores all your most important files in one secure location. Access them 
          wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        
        <button 
          type="button" 
          className="
            px-20 py-4 rounded-3xl bg-linear-150 from-[#5CD7D7] to-[#34A0CD] to-70% 
            text-[14px] leading-[120%] font-raleway font-bold shadow-[2px_3px_6px_rgba(0,0,0,0.16)]
          "
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default HeroSection;