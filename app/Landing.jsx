"use client";
import React from "react";
import IMAGES from "@/public/index";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="w-screen h-screen relative">
        <div className=" flex justify-evenly items-center lg:items-start flex-col absolute mt-20 left-0 top-4 md:ml-10 text-center z-10 h-[80%]">
          <div>
            <h1 className="text-[42px] md:text-[65px] lg:text-[60px] 2xl:text-[100px] text-white font-semibold lg:text-left">
              Life is short
            </h1>
            <h2 className="text-[42px] md:text-[65px] xl:text-[60px] 2xl:text-[100px] text-white font-semibold lg:text-left">
              and the world is
            </h2>
            <h2 className="text-[55px] md:text-[75px] xl:text-[90px] 2xl:text-[130px] text-white font-extrabold lg:text-left">
              Wide
            </h2>
          </div>
          <div className="flex justify-center items-center w-full lg:justify-start">
            <p
              className="mt-4 text-xs md:text-sm lg:text-lg lg:text-left 2xl:text-lg text-white 2xl:mt-4 w-[70%] lg:w-[90%]"
              transition={{ ease: "easeOut", duration: 1.2 }}
            >
              Now apply for the passport hassle free, from the ease of your home! 
            </p>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-3  2xl:gap-8 mt-6 ">
            <button className="items-center px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 2xl:px-4 gap-2 2xl:gap-4 text-sm md:text-base 2xl:text-lg font-normal shadow-2xl text-black bg-white rounded-3xl hover:text-base 2xl:hover:text-xl">
              Apply Now
            </button>
            <button className="items-center px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 2xl:px-4 gap-2 2xl:gap-4 text-sm md:text-base 2xl:text-lg font-normal shadow-2xl text-white border border-white rounded-3xl hover:text-base 2xl:hover:text-xl hover:bg-white hover:text-black">
              Contact sales
            </button>
          </div>
        </div>
        <Image
          alt="Mountains"
          src={IMAGES.landing}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
