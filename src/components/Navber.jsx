import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { HiHome } from 'react-icons/hi';

export default function Navbar() {
    const navLinks = [
        { title: "About", path: "#about" },
        { title: "Projects", path: "#portfolio" },
    ];

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open : {
            x:0,
            transtion : {
                stiffness : 20 ,
                damping :15
            }
        },
        closed : {
            x : '-100%',
            transtion : {
                stiffness : 20 ,
                damping :15
            }
        }
    }
    return (
        <div className='text-white/70 pt-6  '>
            {/* Navigation Links for larger screens */}
            <div className=' fixed  md:flex items-center    w-full justify-center px-4 py-2 max-h-[400px] z-50 '>
                <ul className='flex flex-row p-4 space-x-8  mx-auto w-[305px] border-black rounded-lg bg-black/90 ' >
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>
                                <p>{link.title}</p>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className='group' >
                            <h1 className='text-lg font-bold text-white/70 cursor-pointer' > Contact Me</h1>
                            <div className='relative'>
                                <div className='absolute w-2/3 h-1 transition-all duration-300
                                ease-out bg-orange-400 rounded-full group-hover:w-full'></div>

                                <div className=' mt-1 absolute w-1/3 h-1 transition-all duration-300
                                ease-out bg-orange-600 rounded-full group-hover:w-full'></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>


            {/* for mobile devices */}

            {/* <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded border-white/70 p-2 z-50' >
                {
                    nav ? <AiOutlineClose size={30}  /> : <AiOutlineMenu size={30} />
                }
            </div>

            <motion.div
                initial = {false}
                animate = {nav ? 'open' : 'closed'}
                variants ={ menuVariants}
                className ="absolute left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className='text-4xl font-semibold my-24 text-center space-y-8' >
                    
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.path}>
                                    <p>{link.title}</p>
                                </a>
                            </li>
                        ))}
                    
                </ul>
            </motion.div> */}




        <motion.div
        animate={{ y: [0,12, 0] , x :[] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          className="fixed z-50 md:bottom-[100px] md:right-[100px] 
            bottom-[100px] right-[20px] md:h-[50px] md:w-[50px] h-[40px] w-[40px]
             bg-orange-500  flex justify-center items-center rounded-full  "
          drag
        >
                <a href="/#">
                <HiHome size={30} />
                </a>
            </motion.div>
        </div>
    );
}
