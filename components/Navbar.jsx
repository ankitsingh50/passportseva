"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {AlignLeft, X } from 'lucide-react'

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-30">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-[#006fee] font-bold ">Urgent Passport Seva</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                   <X />
                  ) : (
                    <AlignLeft />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 md:mt-0 ${
                navbar ? 'p-2 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col lg:flex-row justify-center items-center h-full lg:h-auto  lg:flex ">
                <li className=" p-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-teal-500    md:hover:text-[#006fee] md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="flex justify-center  p-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-[#006fee] md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="flex justify-center  p-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-[#006fee] md:hover:bg-transparent">
                  <Link href="#our-services" onClick={() => setNavbar(!navbar)}>
                    Our Services
                  </Link>
                </li>
                <li className="flex justify-center  p-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0     md:hover:text-[#006fee] md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='hidden lg:flex justify-center items-center'>
              <button className='px-6 py-2 text-lg bg-[#006fee] rounded-xl'>Apply Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;