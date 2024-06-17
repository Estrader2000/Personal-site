import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-1/3 justify end">
        <div></div>
        <div className="hiden flex w-full justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
