import React from "react"

const Steps = () => {
    return (
        <div id="our-services" className="w-full h-full">
            <div className=" w-full m-auto pt-[70px] pb-8 ">
                <h3 className="text-lg  w-full text-center md:text-2xl xl:text-3xl mb-5 font-extrabold">
                    Our Process
                </h3>
                <p className="w-[80%] md:w-[39%] lg:w-[30%] xl:w-[24%] 2xl:w-[20%] m-auto text-center text-lg mb-2">
                    Solution tailored to your passport Need
                </p>
                <hr className="border border-black w-[80%] md:w-[39%] lg:w-[30%] xl:w-[24%] 2xl:w-[20%] m-auto" />
                <p className=" w-[95%] m-auto mt-8 text-center leading-relaxed 2xl:w-[95%] 2xl:m-auto 2xl:mt-8">
                    Our comprehensive passport services cover everything from new applications to urgent processing. Whether you're traveling for leisure, business, or study, trust us to handle your passport requirements swiftly and professionally. Explore our range of services designed to make your passport journey seamless.
                </p>

                <div className="mt:[2rem] w-full flex flex-wrap xl:mt-[2rem] text-black justify-evenly">
                    <div className="mt-[2rem] w-[95%] md:w-[45%] md:mt-[3rem] lg:w-[45%] border border-blue-500 xl:w-[22%] p-5 rounded-xl xl:mt-[1rem] flex">
                        <div className="w-full flex flex-col justify-between">
                        <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center font-extrabold text-2xl bg-blue-500 text-white">1</div>
                            <p className=" mt-3 text-black">
                            Analyze and Prepare your file & Register your Application
                            </p>         
                        </div>
                    </div>

                    <div className="mt-[1rem] w-[95%] md:w-[45%] md:mt-[3rem] lg:w-[45%] border border-blue-500 xl:w-[22%] p-5 rounded-xl  xl:mt-[1rem] flex">
                        <div className="w-full flex flex-col justify-between">
                        <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center font-extrabold text-2xl bg-blue-500 text-white">2</div>
                            <p className=" mt-3 text-black">
                            Upload your documents
                            </p>     
                        </div>
                    </div>


                    <div className="mt-[1rem] w-[95%] md:w-[45%] md:mt-[2rem] lg:w-[45%] border border-blue-500 xl:w-[22%] p-5 rounded-xl  xl:mt-[1rem] flex">
                        <div className="w-full flex flex-col justify-between">
                        <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center font-extrabold text-2xl bg-blue-500 text-white">3</div>
                            <p className=" mt-3 text-black">
                            Pay necessary fees to process your Application
                            </p>       
                        </div>
                    </div>

                    <div className="mt-[1rem] w-[95%] md:w-[45%] md:mt-[2rem] lg:w-[45%] border border-blue-500 xl:w-[22%] p-5 rounded-xl  xl:mt-[1rem] flex">
                        <div className="w-full flex flex-col justify-between">
                        <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center font-extrabold text-2xl bg-blue-500 text-white">4</div>
                            <p className=" mt-3 text-black">
                            Book appointment to the Passport Seva kendra
                            </p>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps