import AboutHero from "@/components/AboutHero"
import OperatingPhilosophy from "@/components/OperatingPhilosophy"
import SummaryPlatforms from "@/components/SummaryPlatforms"

const Why = () => {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden bg-white pt-[90px]">
      <AboutHero/>
      <SummaryPlatforms/>
      {/* <FounderMessage/> */}
      <OperatingPhilosophy/>
    </div>
  )
}

export default Why