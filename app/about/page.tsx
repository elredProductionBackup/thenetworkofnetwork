import Navbar from "@/components/layout/Navbar"

const About = () => {
  return (
    <div className="relative h-[100vh] w-full bg-[#131314] flex">
        <Navbar/>
        <div className="flex-1 flex w-[100%] items-center justify-center text-[50px] font-[700]"> 
           About is Under Development
        </div>
    </div>
  )
}

export default About