// import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[300px] flex flex-col justify-center items-center min-w-full max-w-[1700px] gap-12 mx-auto sm:max-w-full md:min-w-full md:p-5 md:text-center ">
      <h1 className="text-6xl uppercase font-bold ml-2 md:text-2xl">
        NO FARMER NO FOOD
      </h1>
      <h4 className="text-2xl font-medium font-bolder text-gray-500 ml-2">
        Connecting Skill's with opportunity Across the Nation for Every Skill
        Level
      </h4>
      <div className="ml-2 mr-2 max-w-[900px] text-center bg-[#50a83d] text-[#111] px-18 py-12 rounded-[35px] font-medium  transition duration-300 hover:-translate-y-2.5 hover:bg-[#111] hover:text-white">
      AgriConnect bridges the gap between farmers and the latest agricultural advancements. We provide a comprehensive platform for accessing vital information, connecting with experts, and finding resources to optimize yields and enhance sustainability. From real-time market data and weather forecasts to expert advice on crop management and innovative farming techniques, AgriConnect empowers farmers to make informed decisions and thrive in today's dynamic agricultural landscape.

      </div>
    </section>
  );
};

export default Hero;
