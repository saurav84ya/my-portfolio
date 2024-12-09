import csslogo from "../assets/csslogo.png";
import gitlogo from "../assets/gitlogo.png";
import htmllogo from "../assets/htmllogo.png";
import javascript from "../assets/javascript.png";
import mongobdlogo from "../assets/mongobdlogo.png";
import nodejslogo from "../assets/nodejslogo.png";
import reacrlogo from "../assets/reactlogo.png";
import reduxlogo from "../assets/reduxlogo.png";
import tailwindcsslogo from "../assets/tailwindcsslogo.png";
import expresslogo from "../assets/expresslogo.png";




import React from 'react'


const skillIcons = [
    {
        icon :htmllogo  , lable : "HTML" 
    },
    {
        icon :csslogo  , lable : "CSS" 
    },
    {
        icon :  tailwindcsslogo, lable : "TailwindCss" 
    },
    {
        icon :javascript  , lable : "JavaScript" 
    },
    {
        icon :reacrlogo  , lable : "ReactJS" 
    },
    {
        icon :mongobdlogo , lable : "MongoDB"  
    },
    ,
    {
        icon : expresslogo , lable : "ExpressJS" 
    },
    ,
    {
        icon : nodejslogo , lable : "NodeJS" 
    },
    {
        icon :gitlogo, lable : "GIT"
    },
    {
        icon :  reduxlogo, lable : "Redux"
    }
    
]

export default function Skills() {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32  min-h-[100vh] ' id="skills" >
        <div className='text-white max-w-[1280px] mx-auto p-8 text-center ' >
            <h2 className='text-6xl font-bold mb-[100px]' >What <span className="text-orange-400"> I</span> Do</h2>
            <div className='flex justify-center flex-wrap gap-9' >
                {
                    skillIcons.map((s,i) => (
                        // <div key={i}
                        //     className=' md:h-[220px] h-[200px] w-[200px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
                        // >
                        //     <img src={s.icon} alt="logo" className="h-[120px]" />
                        //     <p className='mt-2' >{s.lable}</p>
                        // </div>


                        <div className="container noselect relative w-[150px] h-[190px] transition duration-200 " key={i} >
                        <div className="canvas">
                          <div className="tracker tr-1"></div>
                          <div className="tracker tr-2"></div>
                          <div className="tracker tr-3"></div>
                          <div className="tracker tr-4"></div>
                          <div className="tracker tr-5"></div>
                          <div className="tracker tr-6"></div>
                          <div className="tracker tr-7"></div>
                          <div className="tracker tr-8"></div>
                          <div className="tracker tr-9"></div>
                          <div className="tracker tr-10"></div>
                          <div className="tracker tr-11"></div>
                          <div className="tracker tr-12"></div>
                          <div className="tracker tr-13"></div>
                          <div className="tracker tr-14"></div>
                          <div className="tracker tr-15"></div>
                          <div className="tracker tr-16"></div>
                          <div className="tracker tr-17"></div>
                          <div className="tracker tr-18"></div>
                          <div className="tracker tr-19"></div>
                          <div className="tracker tr-20"></div>
                          <div className="tracker tr-21"></div>
                          <div className="tracker tr-22"></div>
                          <div className="tracker tr-23"></div>
                          <div className="tracker tr-24"></div>
                          <div className="tracker tr-25"></div>
                          <div id="card">
                          <p id="prompt">{s.lable}</p>
                            <div className="title">
                              <img src={s.icon} className="md:h-[100px] h-[80px]" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
      


                    ))
                }
            </div>
        </div>

    </div>
  )
}
