import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-10 font-titleFont flex gap-20"
    >
      <div className="p-12 " style={{width:"100%"}}>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">JOB</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div  className="mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 gap-10">
          <ResumeCard 
            title="Software Engineer Trainee"
            subTitle="Foyer Technology pvt - (Aug 2023 - Present)"
            result="CHENNAI, INDIA"
            des="Integration "
          />
          <ResumeCard
            title="Software Developer Intern"
            subTitle="Renambl Technologies - (Feb 2023 - Jul 2023)"
            result="CHENNAI, INDIA"
            des="Application developing"
          />
          <ResumeCard
            title="Front-end Development course"
            subTitle="Besant Technologies"
            result="CHENNAI, INDIA"
            des="Course completed"
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
