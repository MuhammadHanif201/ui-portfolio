import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/Service-section";
import VedioSection from "@/components/Vedio-section";
import Image from "next/image";

export default function PortofolioSection() {
  return (
    <div>
      <div className="lg:px-20 md:px-16 sm:px-8 px-6 md:pt-20 pt-4">
        <h2 className="font-bold text-5xl">Our Awesome Portofolio</h2>
        <div className="flex flex-wrap  gap-8 pt-10 pr-10">
          <img
            src="\assets\image-1.svg"
            alt=""
            className="h-[300px] w-[350px]"
          />
          <img
            src="\assets\image-2.svg"
            alt=""
            className="h-[300px] w-[350px] lg:pt-10 pt-4"
          />
          <img
            src="\assets\image-3.svg"
            alt=""
            className="h-[300px] w-[350px] lg:pt-20 pt-4"
          />
        </div>
      </div>
    </div>
  );
}
