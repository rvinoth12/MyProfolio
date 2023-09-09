import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  const zoom = {
    
  }
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div  className="z-10 w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] overflow-hidden">
      <img
       className='scale-150 -mt-16 hover:filter hover:grayscale-0 grayscale transition-all duration-700'
        src={bannerImg}
        alt="bannerImg"
      />
      </div>
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner