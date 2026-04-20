import logoImg from "/images/logo.svg";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="px-1.25 flex justify-between items-center">
      <img src={logoImg} alt="Fylo logo" className="w-20" />

      <Navbar />
    </header>
  )
}

export default Header;