import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/IMG_20251014_222052.jpg"
import {slider} from "../../Data/Data" 

export default function About() {
  return (<>
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Neeraj Patel
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4   leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Web Developer",
                  "Backend Developer",
                  "Software Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="->"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-base sm:text-[15px] md:text-[15px] text-gray-400 mb-10 mt-8 leading-relaxed ">
            I’m a Software Engineering student and an aspiring Full-Stack
            Developer focused on building scalable, high-performance web
            applications. With experience in both frontend and backend
            development, I create responsive and reliable solutions using modern
            technologies. I’m always exploring new tools and continuously
            sharpening my skills.
          </p>
          <a
            href=""
            target="_blank"
            className="inline-block text-white bg-[#8245ec] py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            
          > Download Resume
          </a>      
        </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
          src={profileImage}
          alt="Neeraj Patel"
          className="w-75 h-75  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
           </div>
      </div>
       
    </section>
  <div className="overflow-hidden w-full pt-14">
      <div className="flex w-max h-25 animate-slide ">
        {[...slider, ...slider].map((icon, index) => (
          <div
            key={index}
            className="text-5xl w-20 flex text-white mx-10 transition-transform duration-300 hover:scale-125 cursor-pointer"
          >
            <img src={icon} alt={index}  className="w-18 h-18 object-contain"/>
          </div>
        ))}
      </div>
    </div>
</>
  );
}
