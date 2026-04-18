import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 px-[60px] py-[30px] h-[90px] flex items-center justify-between z-50 backdrop-blur-[6px] bg-[#FFFFFF1A] transition-all duration-300">
      <div className="flex items-center group h-[32px] w-[220px]">
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

      <ul className="flex justify-between items-center gap-8 h-[60px] w-[370px]">
        <li>
          <Link href="/" className="font-inter font-normal text-[24px] leading-none tracking-normal text-center align-middle text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-inter font-normal text-[24px] leading-none tracking-normal text-center align-middle text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-inter font-normal text-[24px] leading-none tracking-normal text-center align-middle text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
