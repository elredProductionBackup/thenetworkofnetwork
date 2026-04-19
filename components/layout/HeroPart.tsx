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
          <span className="block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[-0.03em] animate-fade-in-up font-['Mencken_Std']">
            We Operate
          </span>

          <span className="block text-[160px] font-extrabold text-[#C01823] leading-none tracking-normal mt-2 animate-fade-in-up delay-100 font-['Mencken_Std']">
            Networks
          </span>
        </h1>


      </div>
    </section>
  );
};

export default HeroPart;