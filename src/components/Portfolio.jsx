import React from "react";
import { motion } from "framer-motion";
import ecommerse from "../assets/ecommerse.png";
import chapapp from "../assets/chapapp.png";
import todo from "../assets/todo.png";

const projects = [
  {
    title: "Ecommerce Site",
    desc: "A feature-packed e-commerce platform with add-to-cart functionality, seamless product ordering, verified user reviews, real-time cart updates, and an admin dashboard for product and user management. It includes secure authentication, responsive design, and Redux for efficient state management.",
    link: "https://mern-eccomerse.netlify.app/",
    git: "https://github.com/saurav84ya/",
    src: ecommerse,
    devstck: ["MongoDb", "ExpressJS", "ReactJS", "NodeJS"],
  },
  {
    title: "Chat App",
    desc: "A MERN-based chat app with secure authentication, real-time messaging via Socket.IO, and global connectivity. It ensures privacy, responsiveness, and effortless communication across devices.",
    link: "https://chat-app-front-end-alpha.vercel.app/",
    git: "https://github.com/saurav84ya/",
    src: chapapp, // Use the imported variable here
    devstck: ["MongoDb", "ExpressJS", "ReactJS", "NodeJS"],
  },
  {
    title: "Todo App",
    desc: "This simple yet feature-rich MERN to-do app lets users add, edit, and delete tasks effortlessly. With user authentication, task management, and real-time updates, it provides a smooth, responsive experience. Despite its simplicity, its clean UI and great features make managing tasks a breeze.",
    link: "https://todo-1-1-frontend.vercel.app/",
    git: "https://github.com/saurav84ya/",
    src: todo, // Use the imported variable here
    devstck: ["MongoDb", "ExpressJS", "ReactJS", "NodeJS"],
  },
];

export default function Portfolio() {
  return (
    <div
      className="text-white bg-gradient-to-b from-[#0C0713] to-[#381a5f] py-18 pt-40 pb-[50px]"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 ">
        Selected
        <span className="text-orange-400"> Projects</span>
      </h1>

      <div className="max-w-[1100px] mx-auto space-y-24 ">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex  ${
              i % 2 === 1
                ? "flex-col-reverse lg:flex-row-reverse gap-12"
                : "flex-col lg:flex-row"
            } `}
          >
            <div className="space-y-2 max-w-[550px] px-4 md:px-8 ">
              <h2 className="xl:text-7xl text-4xl my-4 text-white/70">{`0${
                i + 1
              }`}</h2>
              <h2 className="xl:text-4xl text-2xl">{p.title}</h2>
              <p className="xl:text-lg  text-white/70 break-words p-4">
                {" "}
                {p.desc}{" "}
              </p>
              <div className="flex gap-2">
                {" "}
                {p.devstck.map((li, i) => (
                  <p
                    key={i}
                    className="xl:text-xl text-orange-500 font-semibold "
                  >
                    <span className="text-green-400">#</span>
                    {li}
                  </p>
                ))}{" "}
              </div>
              <div className="w-64 h-[1px] bg-gray-400 my-4 ">
                <a
                  href={p.link}
                  className="mr-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
                <a
                  href={p.git}
                  className="mr-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={p.src}
                alt="img"
                className="xl:h-[350px] md:h-[300px] h-[250px] mt-14 lg:mt-0 rounded-lg   w-auto object-cover "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
