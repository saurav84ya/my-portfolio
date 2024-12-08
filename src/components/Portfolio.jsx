import React from 'react'
import { motion } from 'framer-motion'
import project from '../assets/proj1.jpg'
import project1 from '../assets/proj2.jpg'


const projects = [
    {
        title: "Ecommerce Site",
        desc: "lorem dksjc  jd jsh sdj ms jv j ssj jds j jedsj  wks  ",
        link: "#",
        git: "#",
        src: project,
        devstck: "MongoDb ExpressJS ReactJS NodeJS",
    },
    {
        title: "Chat App",
        desc: "lorem dksjc  jd jsh sdj ms jv j ssj jds j jedsj  wks  ",
        link: "#",
        git: "#",
        src: project1, // Use the imported variable here
        devstck: "MongoDb ExpressJS ReactJS NodeJS",
    },
];



export default function Portfolio() {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f py-18 '  id="portfolio">

        <div  className='max-w-[1200px] mx-auto space-y-24 ' >
            {
                projects.map((p,i) => (
                    <motion.div
                        key={i}
                        initial={{y:75, opacity: 0 }}
                        whileInView={{y:0, opacity: 1 }}
                        viewport={{once : true}}
                        transition={{duration : 0.5 , delay : 0.25}}
                        className={`flex ${i % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row" } `}
                    >
                        <div className='space-y-2 max-w-[550px]' >
                            <h2>{`0${i+1}`}</h2>
                            <h2>{p.title}</h2>
                            <p> {p.desc} </p>
                            <p >  {p.devstck} </p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4 ' >
                                <a href={p.link} className='mr-6'  >Link</a>
                                <a href={p.git} className='mr-6'  >Git</a>
                            </div>
                        </div>

                        <div className='flex justify-center items-center' >
                            <img src="https://th.bing.com/th/id/R.cae62da3d838d410e722df8bc0ae4dea?rik=8C5yqjx8wmwzKA&riu=http%3a%2f%2fwww.reportingday.com%2fwp-content%2fuploads%2f2018%2f07%2fLabrador-Retriever-Dog-HD-Wallpapers.jpg&ehk=ERW%2fI8QUNzJVUKJnznp2hyEzkw6PozCYJGPsy1IiNZM%3d&risl=&pid=ImgRaw&r=0" alt="img" className='h-[400px] w-auto object-cover '  />
                        </div>
                    </motion.div>
                ))
            }
        </div>
      
    </div>
  )
}
