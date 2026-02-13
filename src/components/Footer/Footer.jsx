import React from 'react'
import {  FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa';
export default function Footer() {

  const handleScroll=(sectionId)=>{
    const section=document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
     <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:[20vw] '>
<div className='conatiner mx-auto text-center'>
<h2 className='text-xl font-semibold text-amber-200'> Neeraj Patel</h2>
<nav className='flex fle-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
 {[
  {name:"About",id:"about"},
  {name:"Skills",id:"skills"},
  {name:"Project",id:"work"},
  {name:"Contact",id:"contact"}
 ].map((item,idx)=>(
  <button key={idx} onClick={()=>handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1 '>{item.name}</button>
 ))}
</nav>
<div className='flex flex-wrap justify-center space-x-4 mt-6'>
{[
  {icon:<FaGithub/>,link:"https://github.com/Neerajk14"},
  {icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/neerajpatel14/"},
 ].map((items,idx)=>(
 <a key={idx} href={items.link} rel='noopener noreferrer' target='_blank' className='text-xl hover:text-purple-500  transition-transform transform hover:scale-110 '>{items.icon}</a>
 ))}
</div>
<p className='text-sm text-gray-400 mt-6 '>
 &copy; 2026 Neeraj Patel.All rights reserved.
</p>
</div>
     </footer>
  )
}
