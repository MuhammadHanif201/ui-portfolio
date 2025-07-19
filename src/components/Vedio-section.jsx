import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function VedioSection() {
  return (
    <div className="lg:px-20 md:px-16 sm:px-12 px-6 ">
      <div className="md:grid md:grid-cols-2">
        <h2 className="font-bold lg:text-6xl md:text-5xl sm:text-5xl text-4xl ">Why Enver Is The Best Choice?</h2>
        <p className="md:font-normal sm:font-light font-light  lg:text-xl md:text-base sm:text-xl text-base sm:pt-10 pt-4">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className="lg:py-12 md:py-10 sm:py-8 py-6">
        <img src="\assets\BG.svg" alt="image not found" />
      </div>
    </div>
  );
}
