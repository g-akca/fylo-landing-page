function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6 tablet:gap-12 desktop:gap-14 font-raleway text-[12px] tablet:text-[16px] leading-[120%]">
        <li><a href="#" className="hover:font-bold transition-all">Features</a></li>
        <li><a href="#" className="hover:font-bold transition-all">Team</a></li>
        <li><a href="#" className="hover:font-bold transition-all">Sign In</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;