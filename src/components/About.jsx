



import React from "react";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
   <div className="flex bg-[#0C0713] justify-center items-center min-h-[100vh] pb-[50px] " >
     <div className="max-w-[1200px]  " id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 ">
        About
        <span className="text-orange-400"> Me</span>
      </h1>

      <div className="grid xl:grid-cols-8 md:px-8 px-4 gap-6 mx-auto place-items-center">


        <div className=" w-full xl:col-span-5 col-span-6 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-lg overflow-hidden ">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animae-gradient-xy  "></div>
          <div className="flex flex-grow p-6">
            <img src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className=" md:text-lg text-white/70 mt-2">
              Currently pursuing a Bachelor of Computer Applications (BCA), with a focus on web development. Proficient in the MERN stack.</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:col-span-3 col-span-6 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-lg overflow-hidden ">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animae-gradient-xy  "></div>
          <div className="flex flex-grow p-6">
            <img src={pc} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className=" text-2xl font-bold text-white/80">
                Problem-solving
              </h2>
              <p className="md:text-lg text-white/70 mt-2">
                I approach challenges with a logical and systematic mindset
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:col-span-3 col-span-6 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-lg overflow-hidden ">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animae-gradient-xy  "></div>
          <div className="flex flex-grow p-6">
            <img src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className=" md:text-lg  text-white/70 mt-2">
                I have a diverse portfolio of projocto.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:col-span-5 col-span-6 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-lg overflow-hidden ">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animae-gradient-xy  "></div>
          <div className="flex flex-grow p-6">
            <img src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skill
              </h2>
              <p className="md:text-lg text-white/70 mt-2">
                As a Fullstack Web Developer, I specialize in React JS, MongoDB,ExpressJS
                and NodeJS 
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
   </div>
  );
};

export default About;  