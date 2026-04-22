import logoImg from "/images/logo.svg";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="px-1.25 tablet:px-0 flex justify-between items-center">
      <h1 className="sr-only">Fylo</h1>
      
      <img src={logoImg} alt="Fylo logo" className="w-20 tablet:w-auto tablet:h-10" />

      <Navbar />
    </header>
  )
}

export default Header;