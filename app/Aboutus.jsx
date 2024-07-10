import React from "react";
import IMAGES from "@/public/index";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="w-screen h-full overflow-hidden">
    <div id="about-us" className="w-[95%] h-full mx-auto pt-[70px]">
      <div className="flex justify-center items-center flex-col w-full gap-5 lg:gap-8">
        <div className="flex justify-center items-center flex-col w-full gap-5">
          <h2 className="text-2xl lg:text-4xl font-bold text-black">
            About Us
          </h2>
          <p className="border-b border-black text-lg md:text-sm lg:text-xl text-gray-700 pb-2">
            Quick and Reliable Passport Solutions
          </p>
        </div>

        <div className="flex justify-center items-center flex-col gap-5 lg:w-[80%]">
          <p className="text-sm md:text-sm lg:text-lg text-center text-gray-700">
            Urgent Passport Service is India's go-to destination for quick and
            reliable passport solutions. Our streamlined process and expert
            assistance ensure hassle-free travel for our valued customers. With
            years of experience, we specialize in expediting passport
            applications and providing prompt service tailored to your urgent
            needs.
          </p>
          <p className="text-sm md:text-sm lg:text-lg text-center text-gray-700">
            Count on us to handle the paperwork efficiently while you focus on
            your travel plans. Trust Urgent Passport Service to deliver swift
            and reliable passport solutions, making your journey smoother and
            stress-free.
          </p>
        </div>

        <div className="w-full h-full flex justify-center items-center  ">
          <Image src={IMAGES.about} alt="aboutus" width={800} height={800} />
        </div>

        <div className="my-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[90%] lg:w-[80%] mx-auto">
          <div className="flex justify-center items-center flex-col p-5 border border-blue-600 rounded-xl text-blue-600">
            <h2 className="text-2xl font-bold">100000+</h2>
            <p className="text-center mt-2">Individuals</p>
          </div>
          <div className="flex justify-center items-center flex-col p-5 border border-blue-600 rounded-xl text-blue-600">
            <h2 className="text-2xl font-bold">400+</h2>
            <p className="text-center mt-2">Students</p>
          </div>
          <div className="flex justify-center items-center flex-col p-5 border border-blue-600 rounded-xl text-blue-600">
            <h2 className="text-2xl font-bold">300+</h2>
            <p className="text-center mt-2">Business Travelers</p>
          </div>
          <div className="flex justify-center items-center flex-col p-5 border border-blue-600 rounded-xl text-blue-600">
            <h2 className="text-2xl font-bold">250+</h2>
            <p className="text-center mt-2">Overseas Employees</p>
          </div>
          <div className="flex justify-center items-center flex-col p-5 border border-blue-600 rounded-xl text-blue-600">
            <h2 className="text-2xl font-bold">100+</h2>
            <p className="text-center mt-2">NRI’s</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
