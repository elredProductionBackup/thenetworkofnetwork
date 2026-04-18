import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-white">
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-newsreader text-zinc-900 selection:bg-indigo-500/30">
          <span className="block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[-0.03em] animate-fade-in-up font-['Liberation_Serif']">
            We Operate
          </span>
          <span className="block text-[160px] font-extrabold text-[#C01823] leading-none tracking-normal mt-2 animate-fade-in-up delay-100 font-['Mencken_Std']">
            Networks
          </span>
        </h1>

        <div className="mt-16 flex flex-col items-center animate-fade-in delay-500">
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent mb-4" />
          <p className="font-inter text-[10px] font-normal leading-[15px] tracking-[3px] uppercase text-zinc-500">
            Scroll to Enter
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
