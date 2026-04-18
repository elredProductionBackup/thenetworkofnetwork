import HeroPart from "@/components/layout/HeroPart";
import Websites from "@/components/layout/Websites";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden bg-white">
      {/* <Hero /> */}
      <HeroPart/>
      <Websites />
      <Footer />
    </div>
  );
}
