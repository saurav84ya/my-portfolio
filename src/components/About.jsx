import React from "react";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const AboutCard = ({ icon, title, description }) => (
  <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
    <div className="flex flex-grow p-6">
      <img src={icon} alt={title} className="w-auto h-[130px]" />
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-white/80">{title}</h2>
        <p className="md:text-lg text-white/70 mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="flex bg-[#0C0713] justify-center py-12" id="about">
      <div className="max-w-[1200px] w-full">
        <header className="text-center mb-8">
          <h1 className="text-white text-6xl font-semibold">
            About <span className="text-orange-400">Me</span>
          </h1>
        </header>

        <div className="grid grid-cols-8 gap-6 place-items-center">
          <div className="xl:col-span-5 col-span-8 xl:px-0 px-4  w-full xl:w-auto ">
            <AboutCard
              icon={book}
              title="Education"
              description="I hold a degree in Computer Science and I am focusing on technologies like React, Next.js, and Tailwind CSS."
            />
          </div>

          <div className="xl:col-span-3 col-span-8 xl:px-0 px-4 w-full xl:w-auto ">
            <AboutCard
              icon={pc}
              title="Problem-solving"
              description="I approach challenges with a logical and systematic mindset."
            />
          </div>

          <div className="xl:col-span-3 col-span-8 xl:px-0 px-4 w-full xl:w-auto ">
            <AboutCard
              icon={card}
              title="Experience"
              description="I have a diverse portfolio of projects."
            />
          </div>

          <div className="xl:col-span-5 col-span-8 xl:px-0 px-4 w-full xl:w-auto   " >
            <AboutCard
              icon={finance}
              title="Technical Skill"
              description="As a Fullstack Web Developer, I specialize in React JS, Next.js, and Tailwind CSS."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
