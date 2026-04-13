import Image from "next/image";
import Navbar from "./Navbar";

const HeroPart = () => {
  return (
    <section
      className="relative min-h-[900px] w-full isolate bg-[#131314]"
    >
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND IMAGE (blended) */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="absolute inset-0 object-cover mix-blend-soft-light z-0"
      />

      {/* OPTIONAL DARK LAYER (improves contrast like your design) */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* RADIAL GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `radial-gradient(
            225.8% 51.27% at 50% 50%,
            rgba(239, 68, 68, 0.08) 0%,
            rgba(239, 68, 68, 0) 70%
          )`,
        }}
      />
      {/* BOTTOM LINEAR GRADIENT */}
        <div
        className="absolute bottom-0 left-0 w-full h-[10%] z-[2] pointer-events-none"
        style={{
            background: `linear-gradient(
            to bottom,
            rgba(19, 19, 20, 0) 0%,
            rgba(19, 19, 20, 1) 100%
            )`,
        }}
        />

      {/* HERO CONTENT */}
      <div className="relative z-[3] h-[900px] flex flex-col items-center justify-center text-center">
        <h1 className="font-newsreader text-white selection:bg-indigo-500/30">
          <span className="block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[-0.03em] animate-fade-in-up font-['Liberation_Serif']">
            We Operate
          </span>

          <span className="block text-[72px] md:text-[193px] font-medium italic text-[#FFDAD7] leading-[0.9] tracking-[-0.04em] mt-2 animate-fade-in-up delay-100">
            Networks
          </span>
        </h1>

        <div className="mt-16 flex flex-col items-center animate-fade-in delay-500">
  <p className="font-inter text-[10px] tracking-[3px] uppercase text-[#E5E2E3] mb-4">
    Scroll to Enter
  </p>

  {/* Line wrapper */}
  <div className="relative w-[1px] h-12 overflow-hidden mb-4">
    
    {/* Static faint line */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#E4BEBA]/30 to-transparent" />

    {/* Animated line ONLY */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#E4BEBA] to-transparent animate-scroll-line" />
    
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroPart;