import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import VedioSection from "@/components/Vedio-section";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <div>
      <div className="lg:px-20 md:px-16 px-6">
        <h3 className="md:text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
          The Service We Provide <br /> For You
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 gap-12 text-center">
          <div>
            <img
              src="/assets/development-icon.svg"
              alt=""
              className="mx-auto"
            />
            <h4 className="pt-2.5 font-normal text-lg">Development</h4>
            <p className="pt-2.5">
              Create a platform with the best <br /> and coolest quality from
              us.
            </p>
          </div>

          <div>
            <img src="/assets/designer-icon.svg" alt="" className="mx-auto" />
            <h4 className="pt-2.5 font-normal text-lg">UI/UX Designer</h4>
            <p className="pt-2.5">
              We provide UI/UX Design services, <br /> and of course with the
              best quality.
            </p>
          </div>

          <div>
            <img
              src="/assets/graphic-designing.svg"
              alt=""
              className="mx-auto"
            />
            <h4 className="pt-2.5 font-normal text-lg">Graphic Designer</h4>
            <p className="pt-2.5">
              We provide Graphic Design <br /> services, with the best designers
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 gap-12 text-center">
          <div>
            <img src="/assets/motion-graphic.svg" alt="" className="mx-auto" />
            <h4 className="pt-2.5 font-normal text-lg">Motion Graphik</h4>
            <p className="pt-2.5">
              Create a platform with the best <br /> and coolest quality from
              us.
            </p>
          </div>

          <div>
            <img src="/assets/photography.svg" alt="" className="mx-auto" />
            <h4 className="pt-2.5 font-normal text-lg">Photography</h4>
            <p className="pt-2.5">
              We provide Photography services,
              <br />
              and of course with the best quality
            </p>
          </div>

          <div>
            <img src="/assets/vediography.svg" alt="" className="mx-auto" />
            <h4 className="pt-2.5 font-normal text-lg">Videography</h4>
            <p className="pt-2.5">
              Create a platform with the best <br />
              and coolest quality from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
