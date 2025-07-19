import Image from "next/image";

export default function ContactUs() {
  return (
   
      <div className="md:flex gap-10 justify-between lg:px-20 md:px-16 sm:px-8 px-6 pt-10 ">
        <div className="md:font-bold font-semibold lg:text-6xl md:text-5xl text-2xl pb-4">
            <p> Contact us for the service</p>
            <p>you want to use</p>
        </div>
        <button className="md:h-[60px] md:w-[180px] h-[50px] w-[150px] bg-primarycolor font-bold text-normal rounded-sm">
          Contact us
        </button>
     
    </div>
  );
}
 
         
       