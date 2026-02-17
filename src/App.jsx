import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
 import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div>
      <div className=" bg-[#050414]">
        
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills/>
          <Work />
           <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
