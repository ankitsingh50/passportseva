import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-full w-full mx-auto py-6">
      <div className="flex justify-center items-center  flex-col  ">
        <h2 className="text-xl lg:text-3xl py-8 px-6 text-[#006fee] font-bold border-b border-gray-500 w-[95%] h-full">
          Urgent Passport Seva
        </h2>
      </div>

      <div className="grid  gap-5 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[90%] lg:w-[95%] py-8 lg:px-6 border-b border-gray-500 mx-auto">
        <div className="flex-1">
          <h3 className="tracking-px mb-2 text-base font-semibold uppercase text-blue-500">
            Company
          </h3>
          <ul>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#about-us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#our-services"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-gray-400 hover:text-blue-500"
                href="#faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-gray-400 hover:text-blue-500"
                href="#contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="tracking-px mb-2 text-base font-semibold uppercase text-blue-500">
            Services
          </h3>
          <ul>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="/"
              >
                New Passport
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#"
              >
                Passport Renewal
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#"
              >
                Tatkal Passport
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-gray-400 hover:text-blue-500"
                href="#"
              >
                Lost Passport
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-gray-400 hover:text-blue-500"
                href="/aboutus/our-contact"
              >
                Damaged Passport
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="tracking-px mb-2 text-base font-semibold uppercase text-blue-500">
            Services
          </h3>
          <ul>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="/"
              >
                Delete ECR Passport
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#"
              >
                PPC
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="tracking-px mb-2 text-base font-semibold uppercase text-blue-500">
            Legal
          </h3>
          <ul>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="/"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-smedium text-gray-400 hover:text-blue-500"
                href="#"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="tracking-px mb-2 text-base font-semibold uppercase text-blue-500">
            Stay Connected
          </h3>
          <ul className="flex justify-start items-center gap-5">
            <li className="p-3 bg-gray-400 rounded-full ">
              <Link
                className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200"
                href="/"
              >
                <FaXTwitter />
              </Link>
            </li>
            <li className="p-3 bg-gray-400 rounded-full ">
              <Link
                className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200"
                href="/"
              >
                <SlSocialFacebook />
              </Link>
            </li>
            <li className="p-3 bg-gray-400 rounded-full ">
              <Link
                className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200"
                href="/"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="p-3 bg-gray-400 rounded-full ">
              <Link
                className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200"
                href="/"
              >
                <SlSocialYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-start items-start flex-col w-[90%] lg:w-[95%] py-8 lg:px-6 border-b border-gray-500 mx-auto gap-6 h-full">
        
          <h3 className="tracking-px mb-2  text-base font-semibold uppercase text-blue-500">
            Contact Us
          </h3>
      
        <div className="flex justify-start items-start gap-5">
          <div className="p-2 bg-gray-400 rounded-full">
            <IoLocationSharp className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400 ">
              1204, The Affaires
            </p>
            <p className="text-sm font-medium text-gray-400 ">
              Palm Paradise, Palm Beach Rd, Sector 17,
            </p>
            <p className="text-sm font-medium text-gray-400 ">
              Sanpada, Navi Mumbai, Maharashtra 400705
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-5">
          <div className="p-2 bg-gray-400 rounded-full">
            <MdOutlineMailOutline className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200" />
          </div>
          <div>
          <p className="text-sm font-medium text-gray-400 ">
              Email -<a className="hover:text-blue-500" href="mailto:admin@krafitechsolution.com">admin@krafitechsolution.com</a> 
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-5">
          <div className="p-2 bg-gray-400 rounded-full">
            <MdOutlineLocalPhone className="text-sm lg:text-lg font-smedium text-white hover:text-gray-200" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400 ">
              Phone no. -<a className="hover:text-blue-500" href="tel:+9190823 61628">+91 - 90823 61628</a> 
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] lg:w-[95%] py-8 px-6 mx-auto">
        <p className="flex justify-center items-center w-full">
          © 2024, Urgentpassportseva.in
        </p>
      </div>
    </div>
  );
};

export default Footer;
