// import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
const HowItWorks = () => {
  return (
    <section className="px-25 py-12 flex flex-col bg-[#50a83d] justify-center items-center mx-auto gap-5 min-w-full  ">
      <h3 className="text-2xl font-semibold text-[#111] uppercase ">
        How does it work?
      </h3>
      <div className="flex justify-evenly  gap-5">
        <div className="mx-3  px-12.5 py-7.5 bg-[#deffd6] flex flex-col gap-3 rounded-md transition duration-300 hover: translate-y-2.5 hover:bg-[#111] hover:text-[#fff] w-1/4">
          <div className="  w-fit flex bg-[#111] mx-2 p-2.5 rounded-[100%] justify-center items-center transition duration-300 hover:text-white ">
            <LuUserPlus
              className="text-4xl text-[rgb(255,255,255)] transition duration-300 hover:text-[#fff] 
            "
            />
          </div>
          <h4 className="text-xl mx-2 font-medium ">Create An Account</h4>
          <p className="text-gray-500 mx-2">
            Sign up for a free account as a Farmer or arthiyas. Set up your
            profile in minutes to start selling or buying the crops directly from the farmers.
          </p>
        </div>
        <div className="mx-3  bg-[#deffd6] px-12.5 py-7.5 flex flex-col gap-4 rounded-md transition duration-300 hover: translate-y-2.5 hover:bg-[#111] hover:text-[#fff] w-1/4 ">
          <div className=" w-fit flex bg-[#111] mx-2 p-2.5 rounded-[100%] justify-center items-center transition duration-300 hover:text-white ">
            <VscTasklist
              className="text-4xl text-[#fff] transition duration-300 hover:text-[#fff] 
            "
            />
          </div>
          <h4 className="text-xl mx-2 font-medium">Buy or Sell Crops</h4>
          <p className="text-gray-500 mx-2">
            Farmers can post detailed crops descriptions, and Arthiyas can
            browse a comprehensive list of available crops. Utilize filters
            to find crops that match your preferences.

            
          </p>
        </div>
        <div className="mx-3  bg-[#deffd6] px-12.5 py-7.5 flex flex-col gap-4 rounded-md transition duration-300 hover: translate-y-2.5 hover:bg-[#111] hover:text-[#fff] w-1/4 ">
          <div className=" w-fit flex bg-[#111] p-2.5 ml-2 pu-2 rounded-[100%] justify-center items-center transition duration-300 hover:text-white">
            <BiSolidLike
              className="text-4xl text-[#fff] transition duration-300 hover:text-[#fff] 
            "
            />
          </div>
          <h4 className="text-xl ml-2 font-medium">Hire or Get Hired</h4>
          <p className="text-gray-500 mx-2">
            Employers can shortlist candidates and extend job offers. Job
            seekers can review job offers and accept positions that align with
            their career goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
 //   Buy or sell crops directly from farmers. Farmers can list their crops for sale, and buyers can browse and purchase them.
