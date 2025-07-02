import React from "react";
import logo from "../../public/sign-up-logo.png";
import bgLogo from "../../public/bg-logo-signup.png";
import linqueWord from "../../public/linque-word.png";
import elevete from "../../public/elavate-word.png";
import socialIcons from "../../public/social-icons-all.png";

export default function StartingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex flex-col relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute w-full h-full bottom-[50px] left-[50px] overflow-hidden">
        <img
          src={bgLogo}
          alt="Background Logo"
          className=""
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 px-8">
        {/* Logo and Brand */}
        <div className="flex items-center mb-12">
          <img
            src={logo}
            alt="Linque Logo"
            className="w-[287.32px] h-[287.32px] mr-[36px]"
          />
          <div className="text-white flex flex-col gap-[24px]">
            <img
              src={linqueWord}
              alt="Linque Logo"
              className="w-[395px] h-[67.32px]"
            />
            <img
              src={elevete}
              alt="Elevate Your Outings"
              className="w-[387px] h-[27.32px]"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-[39px] ">
          <div className="">
            <button className="bg-white cursor-pointer w-[347.47px] bg-opacity-20 backdrop-blur-sm poppins font-bold text-[#6A14DC]  py-2 rounded-full text-2xl hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20">
              Business Centre
            </button>
          </div>

          <div>
          <button className="bg-white cursor-pointer w-[347.47px] bg-opacity-20 backdrop-blur-sm poppins font-bold text-[#6A14DC]  py-2 rounded-full text-2xl hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20">
          About Us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#313131] bg-opacity-80 backdrop-blur-sm h-20 flex items-center justify-between px-[167px] relative z-10">
        <div className="flex items-center space-x-4">
          <img
            src={socialIcons}
            alt="Social Media Icons"
            className="h-[47px]"
          />
          <span className="text-white text-[21px] poppins font-medium ml-2">Linque</span>
        </div>

        <div className="text-white text-[18px] poppins font-bold">Want your business on Linque?</div>
      </div>
    </div>
  );
}
