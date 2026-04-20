import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-[330px] bg-[#F2F2F2] px-[60px] py-[80px] flex flex-col gap-[50px] items-center justify-center">
      <div className="w-full h-[42px] max-w-[1536px] flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center w-[220px] h-[42px] overflow-hidden">
          <Image
            src="/asset/theNetwork.svg"
            alt="The Network Logo"
            width={210}
            height={42}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-12 text-[#333333] font-inter font-medium text-[20px]">
          {/* <a href="/" className="hover:text-[#C01823] transition-colors">Home</a> */}
          <a href="/why" className="hover:text-[#C01823] transition-colors">Why</a>
          <a href="/contact" className="hover:text-[#C01823] transition-colors">Contact</a>
        </div>
      </div>
      <hr className="border-t border-[#333333] w-full opacity-20" />
      <div className="w-full h-[28px] max-w-[1536px] flex items-center justify-between text-[#333333] font-inter font-medium text-[20px] leading-[28px] text-right">
        <p>© 2026 Rex-Tone Digital Private Limited. All Rights Reserved</p>
        <div className="flex items-center gap-4">
          {/* <a href="#" className="">Terms of Use</a>
          <span className="text-[#333333]">●</span>
          <a href="#" className="">Privacy Policy</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
