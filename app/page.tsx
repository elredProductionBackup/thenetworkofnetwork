import Hero from "@/components/layout/Hero";
import HeroPart from "@/components/layout/HeroPart";
import Websites from "@/components/layout/Websites";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden bg-[#131314]">
      {/* <Hero /> */}
      <HeroPart/>
      <Websites />
    </div>
  );
}
