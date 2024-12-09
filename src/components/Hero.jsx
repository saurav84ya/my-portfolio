import cursor from "../assets/icon1.png";
import message from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] pt-[100px]  md:h-[100vh] ">
      {/* Radial Background */}
      <div className="absolute rounded-full w-[3000px] h-[7000px] bg-[radial-gradient(circle,#000_80%,#2B1942)] top-[550px] left-1/2 -translate-x-1/2"></div>

      <div className="relative">
        {/* Heading */}
        <div className="text-center font-bold">
          <h1 className=" text-6xl md:text-8xl text-[#98B4CE]">Hii, I am</h1>
          <h1 className="text-6xl md:text-8xl text-[#E48A57]">Saurav Chaurasia</h1>
        </div>

        <motion.div
              animate={{ y: [0,24, 0] , x :[] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            >
              
            </motion.div>

        {/* Cursor Icon */}
        <motion.div
        animate={{ y: [0,24, 0] , x :[] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          className="absolute left-[280px] top-[170px] hidden lg:block  "
          drag
        >
          <img
            src={cursor}
            alt="Cursor"
            height="190"
            width="190"
            draggable="false"
          />
        </motion.div>

        {/* Message Icon */}
        <motion.div
        animate={{ y: [0,24, 0] , x :[] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          className="absolute right-[220px] top-[20px]  hidden lg:block "
          drag
        >
          <img
            src={message}
            alt="Message"
            height="120"
            width="120"
            draggable="false"
          />
        </motion.div>


        
        {/* Description */}
        <p className="text-center px-2 md:px-0 text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        {/* Profile Picture */}
        <img
          src={profilepic}
          alt="Profile"
          className="h-auto w-auto mx-auto mt-6"
        />
      </div>
    </div>
  );
}
