import introImg from "/images/illustration-intro.png";

function HeroSection() {
  return (
    <section className="px-1.25 tablet:px-0 max-w-183.5 self-center flex flex-col gap-18 tablet:gap-16 desktop:gap-14 items-center">
      <img src={introImg} alt="Intro illustration" className="px-2.75 tablet:px-0 desktop:px-1.75" />

      <div className="text-center flex flex-col items-center gap-6 tablet:gap-12 desktop:gap-10">
        <h2 className="font-raleway text-[20px] leading-[120%] font-bold tablet:text-[40px]">All your files in one secure location, accessible anywhere.</h2>

        <div className="max-w-147.5 flex flex-col items-center gap-6 tablet:gap-12 desktop:gap-8">
          <p className="px-3.75 tablet:px-0 tablet:text-[20px] tablet:leading-base">
            Fylo stores all your most important files in one secure location. Access them 
            wherever you need, share and collaborate with friends family, and co-workers.
          </p>
          
          <button 
            type="button" 
            className="
              px-20 py-4 rounded-3xl bg-linear-150 from-[#5CD7D7] to-[#34A0CD] to-80% 
              text-[14px] leading-[120%] font-raleway font-bold shadow-[2px_3px_6px_rgba(0,0,0,0.16)]
              tablet:w-70 tablet:h-14 tablet:text-[16px] tablet:rounded-[28px]
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;