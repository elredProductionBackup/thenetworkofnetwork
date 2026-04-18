import Navbar from "./Navbar";

const HeroPart = () => {
  return (
    <section
      className="relative min-h-[900px] w-full isolate bg-white"
    >
      {/* NAVBAR */}
      <Navbar />



      {/* HERO CONTENT */}
      <div className="relative z-[3] h-[900px] flex flex-col items-center justify-center text-center">
        <h1 className="font-newsreader text-zinc-900 selection:bg-indigo-500/30">
          <span className="block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[-0.03em] animate-fade-in-up font-['Liberation_Serif']">
            We Operate
          </span>

          <span className="block text-[160px] font-extrabold text-[#C01823] leading-none tracking-normal mt-2 animate-fade-in-up delay-100 font-['Mencken_Std']">
            Networks
          </span>
        </h1>

        <div className="mt-16 flex flex-col items-center animate-fade-in delay-500">
  <p className="font-inter text-[10px] tracking-[3px] uppercase text-zinc-500 mb-4">
    Scroll to Enter
  </p>

  {/* Line wrapper */}
  <div className="relative w-[1px] h-12 overflow-hidden mb-4">
    
    {/* Static faint line */}
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-200 to-transparent" />

    {/* Animated line ONLY */}
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-500 to-transparent animate-scroll-line" />
    
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroPart;