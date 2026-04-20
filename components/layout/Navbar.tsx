"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setShowNavbar(false);
      } else {
        // scrolling UP
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-[60px] py-[30px] h-[90px] flex items-center justify-between z-50 backdrop-blur-[6px] bg-[#FFF8] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center h-[32px] w-[220px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/asset/theNetwork.svg"
            alt="theNetwork logo"
            width={220}
            height={42}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className="flex justify-between items-center gap-[80px] h-[60px]">
        <li>
          <Link
            href="/why"
            className="font-inter text-[24px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
          >
            Why
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-inter text-[24px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;