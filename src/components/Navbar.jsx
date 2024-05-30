import React, { useState } from "react";
import { FaBars, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import supimaLogo from "../assets/supimaLogo.png";
import supimaTech from "../assets/supimaTech.png";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "bg-[#191919]" : "bg-none",
        "fixed w-full h-20 z-30 flex justify-between items-center transition-all px-4 text-[#FFFFFF]"
      )}
    >
      <div className="hover:cursor-pointer">
        <Link className="hidden md:flex" to="home" smooth={true} duration={500}>
          <img src={supimaTech} alt="Supima Logo" width="100px"></img>
        </Link>

        <Link className="flex md:hidden" to="home" smooth={true} duration={500}>
          <img src={supimaLogo} alt="Supima Logo" width="50px"></img>
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-[#0871f5] duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#0871f5] duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#0871f5] duration-300">
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        {/* <li className="hover:text-[#0871f5] duration-300">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li> */}
        <li className="hover:text-[#0871f5] duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#191919] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-[#FFFFFF]"
              href="//www.linkedin.com/in/aidan-rheeder-baa95126b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>

          {/* Instagram */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d62976]">
            <a
              className="flex justify-between items-center w-full text-[#FFFFFF]"
              href="//www.instagram.com/aidan_rheeder/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <FaInstagram size={30}></FaInstagram>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
