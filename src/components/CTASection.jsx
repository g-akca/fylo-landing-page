function CTASection() {
  return (
    <div className="px-6 py-10 w-full max-w-96 tablet:max-w-120 bg-navy-850 rounded-[9px] flex flex-col gap-8 text-center shadow-[5px_5px_8px_rgba(0,0,0,0.25)] absolute -bottom-50 left-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-4">
        <h2 className="font-raleway font-bold text-[20px] leading-[120%]">Get early access today</h2>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>

      <form className="flex flex-col gap-6">
        <input 
          type="email" 
          id="email" 
          placeholder="email@example.com" 
          className="
            h-12 bg-white px-8 rounded-3xl shadow-[1px_1px_3px_rgba(7,4,59,0.16)] 
            text-navy-950 text-[12px] leading-4 text-center 
            placeholder:text-gray-400 placeholder:text-base placeholder:leading-base
          " 
        />

        <button 
          type="submit"
          className="
            px-18 py-4 rounded-3xl bg-linear-150 from-[#5CD7D7] to-[#34A0CD] to-80% 
            text-[14px] leading-[120%] font-raleway font-bold shadow-[2px_3px_6px_rgba(0,0,0,0.16)]
          "
        >
          Get Started For Free
        </button>
      </form>
    </div>
  )
}

export default CTASection;