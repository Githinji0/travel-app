import React from "react";
import sliderImage1 from "../assets/images/slider-image-1.jpeg";
import sliderImage2 from "../assets/images/slider-image-2.jpeg";
import sliderImage3 from "../assets/images/slider-image-3.jpeg";
import aboutImage from "../assets/images/About-img.png";
import { TravelInput } from "../components/Travel-Input";
import { Button } from "../components/Button";
import { RightBox } from "../components/RightBox";
import { GridBox } from "../components/GridBox";
import { Carousel } from "../components/carousel";
import { TourCarousel } from "../components/TourCarousel";
import { CustomerImage } from "../components/CustomerImage";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { FooterCard } from "../components/FooterCard";
import { motion } from "framer-motion";

const Home = () => {
  const sliderImages = [sliderImage1, sliderImage2, sliderImage3];

  return (
    <div className=" bg-[#EFE9EB] flex items-center justify-center flex-col ">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full  flex flex-col justify-center items-center gap-0 px-2"
      >
        <div className="min-w-full flex justify-center items-center z-1">
          <div
            className="max-w-[1300px] w-full h-[500px] relative flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg flex-col z-1"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${sliderImages[0]})`,
            }}
          >
            <h1 className="text-white lg:text-4xl text-2xl font-bold z-10 tracking-wider">
              Explore the <span className="bg-pink-600 w-[120px]">World</span>{" "}
              with Us
            </h1>
            <p className="text-white mt-4 z-10 max-w-xl text-center lg:text-lg sm:text-sm">
              Discover breathtaking destinations and unforgettable experiences.A
              journey of a thousand miles begins with a single step. Experience
              the beauty of the world like never before.
            </p>
          </div>
        </div>
        <TravelInput />
      </motion.section>
      <section>
        <div className="bg-[#EFE9EB] p-4 rounded-lg shadow-lg max-w-[1180px] flex flex-col lg:flex-row justify-between gap-5 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-center"
          >
            <img src={aboutImage} alt="About Us" className="w-[70%] lg:w-[100%]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <RightBox />
          </motion.div>
        </div>
      </section>
      <section>
        <div className="bg-[#EFE9EB] p-4 rounded-lg shadow-lg max-w-[1180px]  justify-between gap-5 items-start mt-10 flex flex-col ">
          <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          
          className=" flex flex-col w-full justify-center items-start  text-start mb-6">
            <h2 className="text-1xl font-bold text-[#2E2E2E]  mb-4 items-start border-l-2 pl-2 border-pink-600">
              Amaizing destinations
            </h2>
            <h1 className="text-xl lg:text-2xl font-bold text-pink-600 font-allan mb-4">
              Explore the world's most beautiful places with our curated travel
            </h1>
          </motion.div>
          <GridBox />
          <div className="box w-full flex justify-center items-center mt-6">
            <Button text="View All Destinations" link="/destinations" />
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      
      
      
      >
        <div className="bg-[#EFE9EB] p-4 rounded-lg shadow-lg max-w-[1180px]  justify-between gap-5 items-start  flex flex-col ">
          <div className=" flex flex-col w-full justify-center items-start  text-start mb-6">
            <h2 className="text-xl font-bold text-[#2E2E2E]  mb-4 items-start border-l-2 pl-2 border-pink-600">
              Amazing offers
            </h2>
            <h1 className="text-2xl font-bold text-pink-600 font-allan mb-4">
              Discover exclusive travel deals and offers for your next
              adventure.
            </h1>
          </div>
          <div className=" max-w-[300px] lg:max-w-full flex justify-center items-center mt-6">
            <Carousel />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      
      
      
      >
        <div className="bg-[#EFE9EB] p-4 rounded-lg shadow-lg max-w-[1180px]  justify-between gap-5 items-start mt-10 flex flex-col mb-10">
          <div className="">
            <h3 className="border-l-2 pl-2 border-pink-600 text-[#2E2E2E] font-bold">
              Amazing Tours
            </h3>
            <h1 className="font-allan text-pink-600 text-2xl font-bold mt-5">
              Trending,Best Selling Tours And Fun Destinations
            </h1>
          </div>
          <div className="box max-w-[300px] lg:max-w-full flex justify-center items-center mt-6">
            <TourCarousel />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      
      
      
      >
        <div className="bg-[#d9d9d9] p-4 rounded-lg shadow-lg max-w-[1180px]  justify-between gap-5 items-start mt-10 flex flex-col mb-10">
          <div className="">
            <h3 className="border-l-2 pl-2 border-pink-600 text-[#2E2E2E] font-bold">
              Testimonials
            </h3>
            <h1 className="font-allan text-pink-600 lg:text-2xl font-bold mt-5">
              What Our Clients Say About Us
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row max-w-full  justify-center items-center relative">
            <div className="  ">
              <CustomerImage />
            </div>
            <div className="  h-full">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      
      className="max-w-full bg-[#2E2E2E] text-white mx-2 p-4 flex flex-col items-center justify-center mt-10">
        <FooterCard />
      </motion.footer>
    </div>
  );
};

export default Home;
