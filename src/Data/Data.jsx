// tech logos
import reactIcon from "../assetsLogo/reactjs.png";
import html5 from "../assetsLogo/html.png";
import css3 from "../assetsLogo/css.png";
import bootstrap from "../assetsLogo/bootstrap.png";
import javascript from "../assetsLogo/javascript.png";
import tailwind from "../assetsLogo/tailwindcss.png";
import redux from "../assetsLogo/redux.png";
import nodejs from "../assetsLogo/nodejs.png";
import expressjs from "../assetsLogo/express.png";
import c from "../assetsLogo/c.png";
import java from "../assetsLogo/java.png";
import mysql from "../assetsLogo/mysql.png";
import mongoDb from "../assetsLogo/mongodb.png";
import git from "../assetsLogo/git.png";
import github from "../assetsLogo/github.png";
import postman from "../assetsLogo/postman.png";
import netlify from "../assetsLogo/netlify.png";
import vsCode from "../assetsLogo/vscode.png";
import compass from "../assetsLogo/mc.png";
import firebase from "../assetsLogo/firebase.png"
// project img logos
import vegabondingImage from "../assets/Screenshot 2026-02-12 142519.png";

export const skills = [
  {
    title: "Frontend Development",
    icon: [
      { tag: reactIcon, name: "ReactJs" },
      { tag: html5, name: "HTML5" },
      { tag: css3, name: "CSS3" },
      { tag: bootstrap, name: "Bootstrap" },
      { tag: javascript, name: "JavaScript" },
      { tag: tailwind, name: "Tailwind" },
      { tag: redux, name: "Redux" },
    ],
    description:
      "Building responsive and interactive user interfcae with modern framework.",
  },
  {
    title: "Backend Development",
    icon: [
      { tag: nodejs, name: "NodeJs" },
      { tag: expressjs, name: "ExpressJs" },
      { tag: mongoDb, name: "MongoDb" },
      { tag: mysql, name: "MySQL" },
       {tag:firebase,name:"Firebase"}
    ],
    description: "Creating Robobust server-side application and RESTful Api",
  },
  {
    title: "Language",
    icon: [
      { tag: javascript, name: "JavasScript" },
      { tag: c, name: "C" },
      { tag: java, name: " Core JAVA" },
    ],
    description: "Have relevant knowlege of language with practical learnings.",
  },
  {
    title: "Tools & Technologies",
    icon: [
      { tag: git, name: "Git" },
      { tag: github, name: "GitHub" },
      { tag: vsCode, name: "Vscode" },
      { tag: compass, name: "Compass" },
      { tag: postman, name: "Postman" },
      { tag: netlify, name: "Netlify" },
     
    ],
    description:"Essential tools and technologies i use in my development workflow"
  },
];

export const projects = [
  {
    id: 0,
    title: "Vagabonding Stays",
    tags:["JavaScript","Node.js","Express.js","MongoDb","Bootstrap","Ejs","MongoDb Atlas","Cloudinary",],
    description:"A scalable full-stack accommodation booking platform built with modern web technologies, enabling seamless property listing and secure reservations.",
    img: vegabondingImage,
    github: "https://github.com/Neerajk14/VegaBonding-fullstack.git",
    webapp: "https://vegabonding.onrender.com/listings",
  },
];

export const slider =[reactIcon,javascript,java,c,compass,mongoDb,redux,netlify,vsCode,tailwind,html5,expressjs,nodejs,git,github,mysql,bootstrap,firebase];