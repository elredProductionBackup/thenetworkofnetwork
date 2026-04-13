import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 h-[60px] px-8 flex items-center justify-between z-50 transition-all duration-300">
      <div className="flex items-center group">
        <Link href="/" className="flex items-center">
          <span className="font-extrabold text-[28px] leading-none tracking-[-0.02em] font-['Mencken_Std']">
            <span className="text-[#656A6B]">the</span>
            <span className="text-[#C01823]">Network</span>
          </span>
        </Link>
      </div>

      <ul className="flex items-center gap-8">
        <li className="font-[family-name:var(--font-newsreader)] text-[16px] leading-[24px] tracking-[-0.4px] align-middle">
          <Link href="/" className="relative flex flex-col items-center group">
            <span className="font-light text-[#E4BEBA] group-hover:font-medium group-hover:text-[#EF4444] transition-all duration-300">
              Home
            </span>
            <span className="block h-0 font-medium invisible overflow-hidden select-none pointer-events-none" aria-hidden="true">
              Home
            </span>
          </Link>
        </li>
        <li className="font-[family-name:var(--font-newsreader)] text-[16px] leading-[24px] tracking-[-0.4px] align-middle">
          <Link href="/contact" className="relative flex flex-col items-center group">
            <span className="font-light text-[#E4BEBA] group-hover:font-medium group-hover:text-[#EF4444] transition-all duration-300">
              Contact
            </span>
            <span className="block h-0 font-medium invisible overflow-hidden select-none pointer-events-none" aria-hidden="true">
              Contact
            </span>
          </Link>
        </li>
        <li className="font-[family-name:var(--font-newsreader)] text-[16px] leading-[24px] tracking-[-0.4px] align-middle">
          <Link href="/about" className="relative flex flex-col items-center group">
            <span className="font-light text-[#E4BEBA] group-hover:font-medium group-hover:text-[#EF4444] transition-all duration-300">
              About
            </span>
            <span className="block h-0 font-medium invisible overflow-hidden select-none pointer-events-none" aria-hidden="true">
              About
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
