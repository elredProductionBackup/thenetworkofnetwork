
const OperatingPhilosophy = () => {
  return (
    <section className="py-[40px]  px-5 md:px-[70px] flex flex-col items-center">
      {/* Heading */}
      <h2 className="font-mencken-regular text-[30px] md:text-[48px] leading-[120%] tracking-[0px] text-center text-black mb-[60px]">
      Operating Philosophy
      </h2>

<div className="max-w-[1080px] mx-auto flex flex-col gap-16 md:gap-20">

  {/* ROW 1 */}
  <div className="grid grid-cols-1 md:grid-cols-[430px_650px] gap-6 md:gap-16 items-start">
    <p className="text-[#3A3A3A] font-inter font-semibold text-[30px]">
      Ecosystem over individual
    </p>

    <div className="space-y-4 font-inter text-[28px] leading-[150%] text-[#4A4A4A]">
      <p>Global relevance is not achieved through isolated brilliance.</p>
      <p>
        It comes from{" "}
        <span className="font-semibold text-black">
          building interconnected systems
        </span>
        : talent, capital, supply chains, technology, and influence that
        reinforce each other.
      </p>
      <p>
        Every member contributes to this architecture. The culture rewards{" "}
        <span className="font-semibold text-black">
          collaborative scale
        </span>
        , not personal wins.
      </p>
    </div>
  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-1 md:grid-cols-[430px_650px] gap-6 md:gap-16 items-start">
    <p className="text-[#3A3A3A] font-inter font-semibold text-[30px]">
      Conviction in scale
    </p>

    <div className="space-y-4 font-inter text-[28px] leading-[150%] text-[#4A4A4A]">
      <p>
        {/* Borrowing from the quote :{" "} */}
        <span className="italic">Scale determines seriousness.</span>
      </p>
      <p>
        The network operates on the belief that{" "}
        <span className="font-semibold text-black">
          ambition is only credible when it can compound
        </span>{" "}
        across markets, sectors, and borders.
      </p>
      <p>
        Ideas are interrogated not for novelty but for{" "}
        <span className="font-semibold text-black">
          capacity to scale, sustain, and dominate
        </span>
        .
      </p>
    </div>
  </div>

  {/* ROW 3 */}
  <div className="grid grid-cols-1 md:grid-cols-[430px_650px] gap-6 md:gap-16 items-start">
    <p className="text-[#3A3A3A] font-inter font-semibold text-[30px]">
      Restless forward motion
    </p>

    <div className="space-y-4 font-inter text-[28px] leading-[150%] text-[#4A4A4A]">
      <p>
        A shared temperament:{" "}
        <span className="font-semibold text-black">
          impatient with stagnation, allergic to incrementalism.
        </span>
      </p>
      <p>
        Conversations are anchored in{" "}
        <span className="italic">
          where the world is going, not where it has been.
        </span>
      </p>
      <p>
        Curiosity, speed, and execution are cultural currencies.
      </p>
    </div>
  </div>

</div>
    </section>
  );
};

export default OperatingPhilosophy;