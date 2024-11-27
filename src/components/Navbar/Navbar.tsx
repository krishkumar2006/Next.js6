"use client"

import Link from 'next/link';
import Image from "next/image";
import Ddsgnrpng from "../../../public/images/Ddsgnr.png";
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center py-2 sm:px-14 px-6 shadow-sm border-2 border-black">
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "translate-y-0" : "translate-y-[100%]"} bg-white h-full fixed z-50 top-0 left-0 py-4 px-2 shadow-lg transition-all duration-700`}>
        <div className="absolute top-[12%] left-[10%]">
          <Image src={Ddsgnrpng} className="w-[165px]" alt="Ddsgnr Logo" />
        </div>
        <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>x</div>
        <ul className="absolute top-[28%] left-[15%] flex flex-col gap-9">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Courses</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Achievement</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Testimonials</Link></li>
        </ul>
        <div className="absolute top-[65%] left-[15%] flex flex-col gap-7">
          <button className="py-2 px-16 bg-transparent border text-black border-black hover:text-white hover:bg-black transition-all duration-[0.9s]">Login</button>
          <button className="py-2 px-16 bg-black border text-white border-black hover:text-black hover:bg-transparent transition-all duration-[0.9s]">Signup</button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="logo">
        <Image src={Ddsgnrpng} className="sm:w-[145px] w-[120px]" alt="Ddsgnr Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="xl:hidden block font-semibold sm:text-xl text-lg cursor-pointer" onClick={toggleMenu}>☰</div>

      {/* Desktop Navigation Links */}
      <ul className="hidden xl:flex gap-9">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Courses</Link></li>
        <li><Link href="/">Services</Link></li>
        <li><Link href="/">Achievement</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Testimonials</Link></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="md:flex hidden gap-7">
        <button className="py-2 px-8 bg-transparent border text-black border-black hover:text-white hover:bg-black transition-all duration-[0.9s]">Login</button>
        <button className="py-2 px-8 bg-black border text-white border-black hover:text-black hover:bg-transparent transition-all duration-[0.9s]">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
