function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6 tablet:gap-12 font-raleway text-[12px] tablet:text-[16px] leading-[120%]">
        <li><a href="#">Features</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;