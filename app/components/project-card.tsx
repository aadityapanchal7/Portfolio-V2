import React from "react";
import { Projects } from "../../utils/project-list";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import Image from 'next/image';

function ProjectCard() {
  return (
    <>
      {Projects.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-6 mb-6 overflow-hidden bg-white shadow-lg md:flex-row "
        >
          <div className="flex flex-wrap ">
            {/* Image */}
            <Image
              className="object-cover rounded-lg h-auto mb-5 shadow-lg"
              src={item.image}
              alt={item.alt}
              width={item.width}
            />

            <div className="hidden md:flex md:flex-wrap">
              {/* Languages/Frameworks */}
              {item.Languages.map((tool, index) => (
                <div
                  key={index}
                  className="flex text-black items-center h-7 px-2 py-1 m-1 border-1 shadow-md rounded-xl"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className=" md:pl-5">
            <h5 className="text-xl font-semibold text-gray-800 ">{item.title}</h5>
            <p className="mb-2 text-sm text-gray-400 ">{item.date}</p>
            <p className="text-base font-light text-black">
              {item.description}
            </p>
            <div className="flex pt-4 space-x-4">
              <a href={item.repo} target="_blank" className=" text-black" rel="noopener noreferrer">
                <FiGithub size={24} />
              </a>
              <a href={item.link} target="_blank" className=" text-black" rel="noopener noreferrer">
                <FaLink size={24} />
              </a>
              <details className="relative md:hidden ">
                <summary className="flex items-center cursor-pointer">
                  <FaCode size={24} />
                </summary>
                <div className="flex flex-col">
                  {/* Languages/Frameworks */}
                  {item.Languages.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center h-8 px-3 py-1 m-1 bg-white border shadow-md rounded-xl"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
