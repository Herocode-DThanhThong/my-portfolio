import { avatarImg } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="fixed w-[272px] bg-gray-100 shadow-xl top-0 bottom-0 left-0 flex flex-col items-center justify-center">
      <p className="px-4 py-2 text-sm italic text-center mb-4">
        &quot;On the path to success there are no footprints of lazy
        people&quot;
      </p>
      <div className="flex flex-col items-center gap-4 mb-3">
        <div className="relative rounded-full w-[176px] h-[176px] overflow-hidden">
          <Image src={avatarImg} alt="my-avatar" fill />
        </div>
        <button
          type="button"
          className="flex items-center 
          font-semibold gap-2 
          uppercase shadow-md text-black rounded-lg text-sm px-5 
          py-2.5 text-center me-2 mb-2 hover:opacity-85"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>

          <p>My Resume</p>
        </button>
      </div>
      <div>
        <ul>
          <li className="text-center mb-3 border-b font-bold px-4 py-2 rounded-md text-black border-b-blue-600">
            About me
          </li>
          <li className="text-center mb-3 font-semibold px-4 py-2 rounded-md text-black hover:text-blue-600 transition-all ease-in-out duration-300 cursor-pointer">
            Experience
          </li>
          <li className="text-center mb-3 font-semibold px-4 py-2 rounded-md text-black hover:text-blue-600 transition-all ease-in-out duration-300 cursor-pointer">
            English
          </li>
          <li className="text-center mb-3 font-semibold px-4 py-2 rounded-md text-black hover:text-blue-600 transition-all ease-in-out duration-300 cursor-pointer">
            Projects
          </li>
          <li className="text-center mb-3 font-semibold px-4 py-2 rounded-md text-black hover:text-blue-600 transition-all ease-in-out duration-300 cursor-pointer">
            Skills
          </li>
          <li className="text-center mb-3 font-semibold px-4 py-2 rounded-md text-black hover:text-blue-600 transition-all ease-in-out duration-300 cursor-pointer">
            Education
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
