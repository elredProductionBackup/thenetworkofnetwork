"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Hide/Show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 px-[20px] md:px-[60px] py-[20px] md:py-[30px] h-[64px] md:h-[90px] flex items-center justify-between z-50 backdrop-blur-[6px] bg-[#FFF8] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center h-[17px] w-[120px] md:h-[32px] md:w-[220px]">
          <Image
            src="/asset/theNetwork.svg"
            alt="logo"
            width={220}
            height={42}
            priority
            className="object-contain w-full h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex justify-between items-center gap-[60px] h-[60px]">
          <li>
            <Link
              href="/why"
              className="font-inter text-[20px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
            >
              Why
            </Link>
          </li>
          <li>
           <a
            href="mailto:info@rextonedigital.com"
            className="font-inter text-[20px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
          >
            Contact
          </a>
          </li>
        </ul>

<button
  className="md:hidden flex items-center justify-center w-[24px] h-[24px]"
  onClick={() => setIsOpen(true)}
>
  <Image
    src="/asset/icons/bar.svg"
    alt="menu"
    width={24}
    height={24}
    className="object-contain"
  />
</button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 z-60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] max-w-[380px] bg-white z-60 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end pt-[20px] pr-[20px]">
          <button onClick={() => setIsOpen(false)}>
            <span className="text-2xl">✕</span>
          </button>
        </div>

        {/* NAV ITEMS */}
        <ul className="flex flex-col items-end gap-[20px] px-[20px] mt-[20px]">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[20px] text-[#515151]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/why"
              onClick={() => setIsOpen(false)}
              className="text-[20px] text-[#515151]"
            >
              Why
            </Link>
          </li>
          <li>
            <a href="mailto:info@rextonedigital.com"
              className="font-inter text-[20px] text-[#515151] hover:text-[#C01522] transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;