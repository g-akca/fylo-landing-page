import introImg from "/images/illustration-intro.png";

function HeroSection() {
  return (
    <section className="px-1.25 flex flex-col gap-18 items-center">
      <img src={introImg} alt="Intro illustration" className="w-[95%]" />

      <div className="text-center">
        <h2>All your files in one secure location, accessible anywhere.</h2>

        <p>
          Fylo stores all your most important files in one secure location. Access them 
          wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        
        <button type="button">Get Started</button>
      </div>
    </section>
  )
}

export default HeroSection;