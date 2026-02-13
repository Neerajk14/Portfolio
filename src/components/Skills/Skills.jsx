import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../Data/Data";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="conatiner mx-auto px-6">
        <h2 className="text-3xl text-white font-bold text-center mb-2">
          My
          <span className="text-[#8245ec]">Skills</span>
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mb-2"></div>
        <p className="text-gray-400 text-center text-lg font-semibold max-w-2xl mx-auto mb-16 ">
          Technologies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 max-w-6xl mx-auto">
          {skills.map((skills, idx) => (
            <div
              key={idx}
              className=" bg-[#191223]  rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <h3 className=" text-xl font-semibold text-white">
                  {skills.title}
                </h3>
              </div>
              <p className="text-gray-400">{skills.description}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {skills.icon.map((tech, idx) => (
                  <div
                    key={tech.name}
                    className="flex items center justify-center  "
                  >
                    <div
                      className="flex items-center gap-2 bg-[#231b35]  
                    px-3 py-2   rounded-full  border border-white/10  
                    hover:border-[#8245ec]/50 
                     hover:scale-105 
                    transition-all duration-300"
                    >
                      <img
                        className="w-8 h-8 object-contain"
                        src={tech.tag}
                        alt={tech.name}
                      />
                      <span className="text-white">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
