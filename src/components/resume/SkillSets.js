import React from "react";
import { motion } from "framer-motion";
import ReactImg from "../../assets/images/icons/react.png";
import JsImg from "../../assets/images/icons/javascript.png";
import NodeImg from "../../assets/images/icons/node.png";
import TailwindImg from "../../assets/images/icons/tailwind.png";
import HtmlImg from "../../assets/images/icons/html.png";
import CssImg from "../../assets/images/icons/css.png";
import BootstrapImg from "../../assets/images/icons/bootstrap.png";
import GithubImg from "../../assets/images/icons/github.png";
import MongodbImg from "../../assets/images/icons/mongodb.png";


const SkillSets = () => {
  const techs = [
    {
      src: HtmlImg,
      title: "html",
      style: "hover:shadow-orange-500"
    },
    {
      src: CssImg,
      title: "css",
      style: "hover:shadow-blue-500",
    },
    {
      src: BootstrapImg,
      title: "Bootstrap",
      style: "hover:shadow-sky-400",
    },
    {
      src: TailwindImg,
      title: "tailwindcss",
      style: "hover:shadow-sky-400",
    },
    {
      src: JsImg,
      title: "javascript",
      style: "hover:shadow-yellow-500",
    },
    {
      src: ReactImg,
      title: "react Js",
      style: "hover:shadow-blue-600",
    },
    {
      src: ReactImg,
      title: "react Native",
      style: "hover:shadow-blue-600",
    },
    {
      src: NodeImg,
      title: "node JS",
      style: "hover:shadow-green-500",
    },
    {
      src: MongodbImg,
      title: "MongoDB",
      style: "hover:shadow-green-500",
    },
    {
      src: GithubImg,
      title: "git & github",
      style: "hover:shadow-gray-400",
    },
  ];
  return (
    <div name="experience" className=" w-full text-white h-full py-4">
      <div className="max-w-7xl py-10 mx-auto flex flex-col border-primary_color justify-center w-full h-full">
        <div className="p-10 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <motion.div className="w-full sm:flex sml:flex-wrap sm:justify-center px-24 lg:px-0 md:px-10  text-center py-8  sm:px-0">
          {techs.map(
            ({
              id,
              src,
              title,
              style,
       
            }) => (
              <div key={id} className="m-5" >
                <div style={{width:"250px", height:"250px"}}
                  className={` shadow-md hover:scale-105 group duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="react" style={{width:"150px",height:"150px"}} className="w-32 mx-auto h-32" />
                  <p className="mt-4 text-center ml-4 text-gray-200 group-hover:underline underline-offset-2 duration-500 uppercase">
                    {title}
                  </p>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSets;
