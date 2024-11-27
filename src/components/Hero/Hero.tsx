import Image from "next/image";
import Heropng from "../../../public/images/hero.jpg";
function Hero() {
  return (
    <section className="py-4 sm:px-6 px-2 ">
  <div className="flex flex-col-reverse lg:flex-row gap-5 items-center justify-between ">
    <div className="flex flex-col gap-5 text-center lg:text-start">
      <h2 className="font-semibold text-2xl sm:text-[2em] text-[1.3em]">
        Master New Skills<br />Online With No Fuss
      </h2>
      <p className="text-sm sm:text-[0.9em] text-[0.65em]">
        Find a broad selection of courses and guides to help you<br />pick up new abilities and boost your career.
      </p>
      <div className="flex gap-7 justify-center lg:justify-start">
        <button className="py-2 px-8 bg-black text-white border border-black rounded-lg hover:text-black hover:bg-transparent transition-all duration-900">
          Browse Courses
        </button>
        <button className="py-2 px-8 bg-transparent text-black border border-black rounded-lg hover:text-white hover:bg-black transition-all duration-900">
          Sign Up Now
        </button>
      </div>
    </div>
<Image 
      src={Heropng} 
      alt="hero image" 
      className="w-[88%] sm:w-[80%] md:w-[80%] lg:w-[40vw] xl:w-[27vw] h-auto ml-auto" 
      loading="lazy" 
    />
  </div>
  
</section>)};
 
 export default Hero;
