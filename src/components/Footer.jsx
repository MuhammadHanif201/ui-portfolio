import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="md:flex  md:justify-between md:items-center items-center px-2  sm:px-8 md:px-14 lg:px-20 pt-10 pb-10 ">
      <div className=" w-full md:w-auto  flex justify-center  pb-4">
        <img src="\assets\logo-image.svg" alt="image not found"className="lg:w-20 lg:h-10 md:w-28 md:h-8 justify-center w-20 h-6" /></div>
      <div className="md:flex text-nowrap text-center md:justify-between font-normal text-lg md:gap-4 space-y-4"> 
        <h3>Support</h3>
        <h3>Privacy Policy</h3>
        <h3>Terms and Conditions</h3>
      </div>
      <div className="font-normal md:text-lg text-base items-center md:justify-between py-4 text-center ">
        <h3>© 2020 Enver, All Rights Reserved</h3>
      </div>
    </footer>
  );
}
