import ContactUs from "@/components/Contact-us";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import PortofolioSection from "@/components/Portfolio-section";
import ServiceSection from "@/components/Service-section";
import VedioSection from "@/components/Vedio-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VedioSection />
      <ServiceSection />
      <PortofolioSection />
     <ContactUs/>
    <FooterSection/>
    
    </div>
  );
}
