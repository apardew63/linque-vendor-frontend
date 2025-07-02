import React, { useState } from "react";
import logo from "../../public/sign-up-logo.png";
import bgLogo from "../../public/bg-logo-signup.png";
import linqueWord from "../../public/linque-word.png";
import elevateWord from "../../public/elavate-word.png";
import socialIcons from "../../public/social-icons-all.png";
import playStore from "../../public/play-store.png";
import appStore from "../../public/app-store.png";
import qrCode from "../../public/qr-code.png";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative px-4 1080:px-8 1280:px-16 2xl:px-24 3xl:px-[174px] min-h-screen w-full bg-gradient-to-br from-[#A259FF] via-[#6B21A8] to-[#3B0764] flex flex-col justify-between overflow-hidden">
      {/* Background Logo */}
      <div className="absolute w-full h-full bottom-[20px] left-[20px] 1080:bottom-[30px] 1080:left-[30px] 2xl:bottom-[40px] 2xl:left-[40px] 3xl:bottom-[50px] 3xl:left-[50px] overflow-hidden opacity-20 1080:opacity-30 2xl:opacity-40 3xl:opacity-100">
        <img src={bgLogo} alt="Background Logo" className="w-full h-full object-contain" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-1 w-full flex-col 1280:flex-row">
        {/* Left Section */}
        <div className="w-full 1280:w-1/2 flex flex-col justify-between px-4 1080:px-8 1280:px-12 pt-4 1080:pt-6 2xl:pt-8 pb-0 min-h-[600px] 1080:min-h-[700px] 2xl:min-h-[800px]">
          {/* Back Button */}
          <div className="mb-4">
            <button className="text-white flex items-center text-sm 1080:text-base 2xl:text-lg poppins font-medium hover:opacity-80 transition-opacity">
              <svg
                className="w-4 h-4 1080:w-5 1080:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
          
          {/* Logo and Brand */}
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex flex-col 1080:flex-row items-center justify-center mb-6 1080:mb-8 2xl:mb-10">
              <img
                src={logo}
                alt="Linque Logo"
                className="w-[120px] h-[120px] 1080:w-[180px] 1080:h-[180px] 1280:w-[220px] 1280:h-[220px] 2xl:w-[250px] 2xl:h-[250px] 3xl:w-[287px] 3xl:h-[287px] mb-4 1080:mb-0 1080:mr-4 2xl:mr-8"
              />
              <div className="flex flex-col gap-3 1080:gap-4 2xl:gap-6 text-center 1080:text-left">
                <img
                  src={linqueWord}
                  alt="Linque Logo"
                  className="w-[200px] h-[34px] 1080:w-[250px] 1080:h-[42px] 1280:w-[300px] 1280:h-[51px] 2xl:w-[350px] 2xl:h-[59px] 3xl:w-[395px] 3xl:h-[67px] mx-auto 1080:mx-0"
                />
                <img
                  src={elevateWord}
                  alt="Elevate Your Outings"
                  className="w-[190px] h-[13px] 1080:w-[240px] 1080:h-[17px] 1280:w-[290px] 1280:h-[20px] 2xl:w-[340px] 2xl:h-[24px] 3xl:w-[387px] 3xl:h-[27px] mx-auto 1080:mx-0"
                />
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex flex-wrap items-center justify-center gap-2 1080:gap-4 2xl:gap-6 mb-4 1080:mb-6 2xl:mb-8 poppins">
              <span className="text-white text-sm 1080:text-lg 2xl:text-xl 3xl:text-2xl">Restaurants</span>
              <div className="w-1 h-1 1080:w-2 1080:h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm 1080:text-lg 2xl:text-xl 3xl:text-2xl font-medium">Activities</span>
              <div className="w-1 h-1 1080:w-2 1080:h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm 1080:text-lg 2xl:text-xl 3xl:text-2xl font-medium">Venues</span>
              <div className="w-1 h-1 1080:w-2 1080:h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm 1080:text-lg 2xl:text-xl 3xl:text-2xl font-medium">Live Events</span>
            </div>
            
            <button className="bg-white cursor-pointer bg-opacity-20 backdrop-blur-sm poppins font-bold text-[#6A14DC] py-2 1080:py-2 2xl:py-2 rounded-full text-sm 1080:text-base 2xl:text-lg hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20 mb-4 1080:mb-6 2xl:mb-8 w-[200px] 1080:w-[250px] 1280:w-[300px] 3xl:w-[347px]">
              About Us
            </button>
            
            {/* QR and Store Buttons */}
            <div className="flex items-center justify-center w-full">
              <div className="relative bg-[#360c68] rounded-xl 1080:rounded-2xl overflow-hidden shadow-2xl w-full max-w-[320px] 1080:max-w-[450px] 1280:max-w-[550px] 2xl:max-w-[620px] 3xl:max-w-[689px] min-h-[200px] 1080:min-h-[250px] 2xl:min-h-[310px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent"></div>
                <div className="relative flex flex-col 1080:flex-row items-center justify-between p-4 1080:p-6 2xl:p-8 gap-3 1080:gap-4 2xl:gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white p-1 1080:p-2 rounded-lg 1080:rounded-xl shadow-lg">
                      <img
                        src={qrCode}
                        alt="QR Code to download LINQUE App"
                        className="w-[80px] h-[80px] 1080:w-[120px] 1080:h-[120px] 1280:w-[150px] 1280:h-[150px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[202px] 3xl:h-[199px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 1080:gap-3 w-full">
                    <div className="w-full h-[50px] 1080:h-[60px] 2xl:h-[70px] 3xl:h-[84px] bg-black flex items-center justify-center rounded-lg 1080:rounded-xl">
                      <img
                        src={appStore}
                        alt="Download on the App Store"
                        className="h-[40px] 1080:h-[50px] 2xl:h-[60px] 3xl:h-[70px] w-auto max-h-full object-contain"
                      />
                    </div>
                    <div className="w-full h-[50px] 1080:h-[60px] 2xl:h-[70px] 3xl:h-[84px] bg-black flex items-center justify-center rounded-lg 1080:rounded-xl">
                      <img
                        src={playStore}
                        alt="Download on the Play Store"
                        className="h-[40px] 1080:h-[50px] 2xl:h-[60px] 3xl:h-[70px] w-auto max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 1080:px-6 2xl:px-8 pb-4 1080:pb-6 2xl:pb-8">
                  <p className="text-white text-xs 1080:text-sm 2xl:text-sm font-semibold tracking-wide text-center poppins">
                    Scan the QR Code to download the LINQUE App for a more optimal experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full 1280:w-1/2 flex flex-col items-center justify-center relative min-h-[400px] 1080:min-h-[600px] 2xl:min-h-[800px] mt-8 1280:mt-0">
          {/* Sign In Box */}
          <div className="w-full max-w-[320px] 1080:max-w-[400px] 1280:max-w-[450px] 2xl:max-w-[500px] 3xl:max-w-[555px] rounded-xl 1080:rounded-2xl border border-white border-opacity-30 bg-opacity-10 backdrop-blur-md shadow-lg px-6 1080:px-8 2xl:px-10 py-6 1080:py-7 2xl:py-8 mb-4 1080:mb-6 2xl:mb-8">
            <h2 className="text-white text-2xl 1080:text-3xl 1280:text-4xl 3xl:text-[48px] poppins mb-2 leading-tight">
              Sign In
            </h2>
            <p className="text-white text-sm 1080:text-base poppins font-medium mb-4 1080:mb-6 2xl:mb-8">
              Please Sign In to View Business Centre
            </p>
            <div className="space-y-3 1080:space-y-4 2xl:space-y-5">
              <div>
                <label className="text-white text-xs 1080:text-sm poppins font-medium block mb-1 1080:mb-2">
                  Username/Email
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="user123@gmail.com"
                  className="w-full px-3 1080:px-4 py-2 1080:py-3 rounded-full text-white placeholder-white border border-white border-opacity-40 bg-transparent poppins text-sm 1080:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="text-white text-xs 1080:text-sm poppins font-medium block mb-1 1080:mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full px-3 1080:px-4 py-2 1080:py-3 rounded-full text-white placeholder-white border border-white border-opacity-40 bg-transparent poppins text-sm 1080:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <button className="w-full text-purple-700 py-2 1080:py-3 rounded-full poppins font-bold text-sm 1080:text-base 2xl:text-lg bg-white hover:bg-purple-100 transition">
                Log In
              </button>
            </div>
            <div className="text-center mt-2">
              <button className="text-white text-xs poppins font-medium hover:opacity-80 transition-opacity cursor-pointer">
                Forgot password?
              </button>
            </div>
            <div className="text-center mt-4 1080:mt-6">
              <span className="text-white text-sm 1080:text-base poppins font-medium">
                Don't have an account?
              </span>
              <button className="text-white text-sm 1080:text-base poppins font-bold ml-1 hover:opacity-80 transition-opacity underline cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
          
          {/* Sign Up Box */}
          <div className="w-full max-w-[320px] 1080:max-w-[400px] 1280:max-w-[450px] 2xl:max-w-[500px] 3xl:max-w-[555px] rounded-xl 1080:rounded-2xl border border-white border-opacity-30 bg-opacity-10 backdrop-blur-md shadow-lg px-6 1080:px-8 2xl:px-10 py-4 1080:py-5 2xl:py-6 mb-4 1080:mb-6 2xl:mb-8">
            <div className="flex items-center justify-center">
              <button className="w-full max-w-[250px] 1080:max-w-[300px] 3xl:max-w-[350px] text-purple-700 py-2 1080:py-3 rounded-full poppins font-bold text-sm 1080:text-base 2xl:text-lg bg-white hover:bg-purple-100 transition mb-2">
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <span className="text-white text-xs 1080:text-sm poppins font-medium">
                Want your business on LINQUE?
              </span>
            </div>
            <div className="text-center">
              <span className="inline-block text-white text-sm 1080:text-base poppins font-bold border-b-2 border-white pb-1 cursor-pointer">
                Click Here
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Social Icons Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#313131] bg-opacity-80 backdrop-blur-sm h-[40px] 1080:h-[48px] 2xl:h-[52px] flex items-center justify-center z-20">
        <div className="flex items-center space-x-2 1080:space-x-4">
          <img
            src={socialIcons}
            alt="Social Media Icons"
            className="h-[24px] 1080:h-[30px] 2xl:h-[34px]"
          />
        </div>
      </div>
    </div>
  );
}