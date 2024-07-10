import React from "react";
import { MoveRight ,Book} from "lucide-react";
 

const OurServices = () => {
  return (
    <div id="our-services" className="w-full h-full">
      <div className=" w-full m-auto pt-[70px] pb-8 ">
        <h3 className="text-lg  w-full text-center lg:text-3xl mb-5 font-extrabold">
          Our Services
        </h3>
        <p className="w-[80%] md:w-[39%] lg:w-[30%] xl:w-[24%] 2xl:w-[20%] m-auto text-center text-lg mb-2">
          solution tailored to your passport Need
        </p>
        <hr className="border border-blue-500 w-[80%] md:w-[39%] lg:w-[30%] xl:w-[24%] 2xl:w-[20%] m-auto" />
        <p className=" w-[95%] m-auto mt-8 text-center leading-relaxed 2xl:w-[95%] 2xl:m-auto 2xl:mt-8">
          Our comprehensive passport services cover everything from new
          applications to urgent processing. Whether you're traveling for
          leisure, business, or study, trust us to handle your passport
          requirements swiftly and professionally. Explore our range of services
          designed to make your passport journey seamless.
        </p>

        <div className="mt:[2rem] w-full flex flex-wrap xl:mt-16 text-black">
          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className="text-blue-900 mt-3 font-extrabold text-lg">
                Fresh Passport
              </p>
              <p className="mt-3 w-[85%]">
                Initial passport issuance for international travel
                identification.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className="text-blue-900 mt-3 font-extrabold text-lg">
                Passport Renewal
              </p>
              <p className="mt-3 w-[85%]">
                Extending validity of existing passport for continued international travel.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>


          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className="text-blue-900 mt-3 font-extrabold text-lg">
                Tatkal Passport
              </p>
              <p className="mt-3 w-[85%]">
                Expedited passport issuance for urgent travel needs.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className=" text-blue-900 mt-3 font-extrabold text-lg">
                Lost Passport
              </p>
              <p className="mt-3 w-[85%]">
                Reissuing passport due to misplaced or stolen document.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
              <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>
              <p className=" text-blue-900 mt-3 font-extrabold text-lg">
                Damaged Passport
              </p>
              <p className="mt-3 w-[85%]">
                Renewal or replacement due to impaired travel document condition.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className="text-blue-900 mt-3 font-extrabold text-lg">
                Delete ECR Passport
              </p>
              <p className="mt-3 w-[85%]">
                Passport without Emigration Check Required (ECR) status.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[1rem] w-[95%] md:w-[30.5%] md:mt-[3rem] lg:w-[30%] border border-blue-500 xl:w-[22%] p-5 rounded-xl ml-[2%] xl:mt-[1rem] flex">
            <div className="w-full flex flex-col justify-between">
            <div className="flex justify-center items-center bg-blue-300 w-[50px] h-[50px] rounded-[25px]"><Book/></div>

              <p className="text-blue-900 mt-3 font-extrabold text-lg">
                PPC
              </p>
              <p className="mt-3 w-[85%]">
                Abbreviation for Passport Consultation, Guidance, or Counseling Service.
              </p>
              <div className="mt-10 w-full flex justify-end item-center">
                <div className="w-[40%] md:w-[63%] lg:w-[45%] xl:w-[50%] flex justify-between font-semibold text-blue-500">
                  <p>Apply Now</p>
                  <MoveRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
