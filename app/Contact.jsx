import React from "react";
import IMAGES from "@/public/index";
import Image from "next/image";
import { Input } from "@nextui-org/react";

const Contact = () => {
  return (
    <div id="contact" className="w-screen h-screen bg-blue-400 relative">
      <Image src={IMAGES.contact} alt="aboutus" fill style={{ overflow:"hidden"}} />

      <div className="flex justify-center items-center absolute bg-white bottom-5 lg:bottom-0 right-0 h-[70%] w-[90%] lg:h-[60%] lg:w-[30%] ">
        <div className="flex justify-center items-center h-full w-full ">
          <form className="w-full h-full" action="">
            <h2 className="flex justify-center items-center text-center text-2xl text-black p-5 h-[25%] font-bold">
              Contact Us
            </h2>
            <div className="flex justify-between items-center flex-col p-5 h-[50%] px-10 gap-3 overflow-hidden">
              <Input
                type="text"
                placeholder="Full Name"
                classNames={{
                  label: "text-black/50 ",
                  input: [
                    "bg-white",
                    "text-gray-500 ",
                    "placeholder:text-gray-500",
                    "text-sm",
                    "p-4",
                    "border-b",
                    "border-black",
                    "focus:outline-none",
                    
                  ],
                  innerWrapper: "bg-white",
                  inputWrapper: [
                    "border-none",
                    "bg-white",
                    "backdrop-blur-xl",
                  ],
                }}
              />
               <Input
                type="text"
                placeholder="+91"
                classNames={{
                  label: "text-black/50 ",
                  input: [
                    "bg-white",
                    "text-gray-500 ",
                    "placeholder:text-gray-500",
                    "text-sm",
                    "p-4",
                    "border-b",
                    "border-black",
                    "focus:outline-none",
                    
                  ],
                  innerWrapper: "bg-white",
                  inputWrapper: [
                    "border-none",
                    "bg-white",
                    "backdrop-blur-xl",
                  ],
                }}
              />
              <Input
                type="email"
                placeholder="Your Email"
                classNames={{
                  label: "text-black/50 ",
                  input: [
                    "bg-white",
                    "text-gray-500 ",
                    "placeholder:text-gray-500",
                    "text-sm",
                    "p-4",
                    "border-b",
                    "border-black",
                    "focus:outline-none",
                    
                  ],
                  innerWrapper: "bg-white",
                  inputWrapper: [
                    "border-none",
                    "bg-white",
                    "backdrop-blur-xl",
                  ],
                }}
              />
            
            </div>
            <div className="flex justify-end items-center h-[25%] ">
              <button
                className="px-7 py-3 mt-5 w-[50%] bg-blue-600 flex justify-center items-center text-white font-semibold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
