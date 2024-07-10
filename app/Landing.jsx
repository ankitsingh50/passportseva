"use client";
import React from "react";
import IMAGES from "@/public/index";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className=" w-[60%] h-full bg-blue-500/50 overflow-hidden">
        <div className="absolute flex justify-evenly items-center lg:items-start flex-col mt-20 text-center z-10 left-10 top-10 h-[80%]">
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
              className="mt-4 text-sm md:text-sm lg:text-lg lg:text-left 2xl:text-lg text-white 2xl:mt-4 w-[70%] lg:w-[90%]"
              transition={{ ease: "easeOut", duration: 1.2 }}
            >
              Now apply for the passport hassle free, from the ease of your
              home!
            </p>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-3  2xl:gap-8 mt-6 ">
            <button className="items-center px-4 py-3 md:px-5 md:py-3 lg:px-8 lg:py-4 2xl:px-4 gap-2 2xl:gap-4 text-sm md:text-base 2xl:text-lg  shadow-2xl text-black bg-white rounded-3xl hover:text-base 2xl:hover:text-xl font-semibold">
              Apply Now
            </button>
            <button className="items-center px-4 py-3 md:px-5 md:py-3 lg:px-8 lg:py-4 2xl:px-4 gap-2 2xl:gap-4 text-sm md:text-base 2xl:text-lg  shadow-2xl text-white border border-white rounded-3xl hover:text-base 2xl:hover:text-xl hover:bg-white hover:text-black font-semibold">
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
            overflow:"hidden"
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
