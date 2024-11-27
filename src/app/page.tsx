import Image from "next/image";
import Header from "../components/Header/Header"
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Company from "@/components/company/company";
import Course from "@/components/Course/Course";
import Achievement from "@/components/Achievement/Achievement";
import Detail from "@/components/Detail/Detail";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

 function Home() { 
  return(
  <div>
    <Header></Header>
    <Navbar></Navbar>
    <Hero></Hero>
    <Company></Company>
    <Course></Course>
    <Achievement></Achievement>
    <Detail></Detail>
    <Team></Team>
    <Testimonials></Testimonials>
    <Footer></Footer>
    
  </div>)
}
   export default Home;
