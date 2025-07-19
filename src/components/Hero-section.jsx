import Navbar from "@/components/Navbar";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    // <div className="px-[162px] py-5">
    //   <Navbar />
    //   <div
    //     className="h-[396px] w-full flex justify-center items-center"
    //     style={{
    //       backgroundImage: "url(/assets/Hero-section-image.svg)",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //     }}
    //   >
    //     <div className="justify-start items-start pt-0  px-52">
    //       <h1 className="text-center font-semibold text-[40px]">
    //         A Digital Product Studio that will Work
    //       </h1>
    //       <div className="h-16 w-[600px] flex items-center text-center justify-center opacity-50 bg-black">
    //         <div className="justify-center items-center  rounded-2xl  gap-1 flex">
    //           <p>For</p>
    //           <button className=" bg-[#262626] rounded-lg px-2 py-1">Startups</button>
    //           <p>,</p>
    //           <button className=" bg-[#262626] rounded-lg px-2 py-1">
    //             Enterprise leaders
    //           </button>
    //           <p>,</p>
    //           <button className="=  bg-[#262626] rounded-lg px-2 py-1">
    //             Media & Publishers
    //           </button>
    //           <p>and</p>
    //           <button className=" bg-[#262626] rounded-lg px-2 py-1">Social Good</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
       <div className="md:grid md:grid-cols-2 lg:px-20 md:px-16 sm:px-12 px-10 pt-12  items-center relative">
        <div>
          <h1 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl">Build Your Awesome Platform</h1>
          <p className="pt-2 font-normal lg:text-lg md:text-base text-sm ">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <div className="md:pt-8  sm:pt-6 pt-4 flex">
            <button className="  text-nowrap font-bold lg:text-xl md:text-lg sm:text-sm text-xs  lg:h-[58px] md:h-[52px] sm:h-[40px] h-[32px]   lg:w-[200px] md:w-[170px] sm:w-[150px] w-[110px] bg-primarycolor    border border-primarycolor flex items-center lg:px-4 md:px-3 sm:px-2 px-1 gap-2">
              Our Services <LuArrowUpRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/image.svg"
            alt="Platform illustration"
            className="w-3/4 h-auto"
          />
        </div>
         <div className="lg:flex hidden">
 <div className="absolute top-20 right-12">
            <img src="\assets\icon.svg" alt="" className="h-[31px] w-[30px]" />
        </div>
         <div className="absolute top-28 right-150">
            <img src="\assets\icons-2.svg " alt="" className="h-[31px] w-[30px]" />
        </div>
            <div className="absolute lg:bottom-20 bottom-10  right-12">
            <img src="\assets\add.svg" alt="" className="h-[31px] w-[30px]" />
        </div>
         <div className="absolute bottom-32 right-150">
            <img src="\assets\icon-image.svg " alt="" className=" h-[31px] w-[30px]"/>
        </div>
        </div>
     

      </div>
  );
}
