import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
      <Navbar />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/hero_bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic darkened overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* Specific radial gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(225.8% 51.27% at 50% 50%, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0) 70%)'
          }}
        />

        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-newsreader text-white selection:bg-indigo-500/30">
          <span className="block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[-0.03em] animate-fade-in-up font-['Liberation_Serif']">
            We Operate
          </span>
          <span className="block text-[72px] md:text-[193px] font-medium italic text-[#FFDAD7] leading-[0.9] tracking-[-0.04em] mt-2 animate-fade-in-up delay-100">
            Networks
          </span>
        </h1>

        <div className="mt-16 flex flex-col items-center animate-fade-in delay-500">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#E4BEBA] to-transparent mb-4" />
          <p className="font-inter text-[10px] font-normal leading-[15px] tracking-[3px] uppercase text-[#E5E2E3]">
            Scroll to Enter
          </p>
        </div>
      </div>

      {/* Bottom fade for smooth transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;
