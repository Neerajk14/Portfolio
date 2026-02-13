import React from "react";
import { projects } from "../../Data/Data";
import { useState } from "react";

export default function Work() {
  const [selectedProject ,setSelectedProject] =useState(null);

  const handleOpenModel =(project)=>{
 setSelectedProject(project);
  };

  const handleCloseModel=(project)=>{
setSelectedProject(null);

  }
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative "
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of live projects I have worked on, highlighting my skills
          and experience in various technology
        </p>
      </div>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project)=>(
            <div key={project.id}
            onClick={()=> handleOpenModel(project)}
            className="border border-white bg-gray-900 badrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500 hover:-translate-y-2 transition-transform duration-300 ">
              <div className="p-4">
                <img src={project.img} alt={project.title} className="w-full h-60 object-cover" />
              </div>
              <div className="p-6">
               <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
               <p className="text-gray-500  mb-4 pt-5 line-clamp-3">{project.description}</p>
               <div className="mb-4">
            {project.tags.map((tag,idx)=>(
              <span
              key={idx} className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
               </div>
              </div>
            </div>
          ))}
        </div>

  {selectedProject&&(
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 ">
      <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative" >
        <div className="flex justify-end p-4">
          <button onClick={handleCloseModel} className=" text-white font-bold text-3xl hover:text-purple-500 ">
            &times;
          </button>
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-center bg-gray-900 px-4">
              <img src={selectedProject.img} alt={selectedProject.title} className="lg:w-full w-[95%] object-contain rounded-xl  "/>
            </div>
            <div className=" lg:p-8 p-6">
              <h3 className="lg:text-3xl font-bold text-white mb-4 text-md ">{selectedProject.title}</h3>
              <p className="text-gray-400  mb-6 lg:text-base text-xs ">{selectedProject.description} </p>
              <div className="flex flex-wrap gap-2 mb-6">{selectedProject.tags.map((tag,idx)=>(
                 <span
              key={idx} className=" bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
              >
                {tag}
              </span>
              ))}</div>
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="nooperner noreferrer" className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center "> View Code</a>
                <a href={selectedProject.webapp} target="_blank" rel="nooperner noreferrer" className="w-1/2 bg-purple-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center "> Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )}
    </section>
  );
}
