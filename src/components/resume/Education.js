import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full p-10 "
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.A Economics"
            subTitle="Government Arts College Salem - 07"
            result="60%"
            des="2018 - 2021"
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Sengunthar Higher Secondary School Tharamangalam, salem"
            result="62%"
            des="2018"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sengunthar Higher Secondary School Tharamangalam, salem"
            result="72%"
            des="2016."
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education