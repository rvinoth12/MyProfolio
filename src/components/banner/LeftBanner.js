import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import resume from "../../assets/resume.pdf"

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Developer.","App Developer.","Web Developer."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 20,
      delaySpeed: 3000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">VINOTH R</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I have 6 months of experience building and designing software. Currently, I love to work on web & mobile application using technologies like React js, React Native, Tailwind css, Bootstrap, Node js, mongoDB and many more. It is always exciting to work on new projects by sharing the knowledge I have and getting the valuable viewpoints from others.
        </p>
      </div>
     {/* Media */}
     <Media />

     <div>
      <a className='bg-slate-500 p-5 rounded-full text-black hover:bg-neutral-600 transition-all duration-500 hover:text-white' href={resume} target='_blank'>Download Resume</a>
     </div>
    </div>
  );
}

export default LeftBanner