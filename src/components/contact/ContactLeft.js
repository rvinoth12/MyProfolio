import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";
import Media from '../banner/Media';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className='flex justify-center'>
      <img className='border-2 filter hover:grayscale-0 grayscale transition-all duration-300 border-gray-600 rounded-full w-2/3 h-2/3 object-cover' src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4">
        <div className='text-center'>
          <h3 className="text-3xl font-bold text-white">VINOTH</h3>
          <p className="text-lg font-normal text-gray-400">
            Software Developer
          </p>
        </div>
        <p className="text-base mt-5 text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9113632816</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">vinothwebdesigner10@gmail.com</span>
        </p>
      </div>

      <div className="py-2">
        <Media/>
      </div>
    </div>
  );
}

export default ContactLeft