import { experiences } from "@/data";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FcEngineering } from "react-icons/fc";
type Props = {};

const Experience = (props: Props) => {
  return (
    <div id="experience" className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">
        Experience
      </h1>
      {/* Company */}
      {experiences.map((exp, idx) => (
        <div key={exp.companyName} className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"https://www.tmasolutions.vn/"} target="_blank">
                <h2 className="font-bold text-[#169DFE] text-2xl flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all ease-in-out duration-300">
                  <span>{exp.companyName}</span>
                  <span>
                    <BiLinkExternal />
                  </span>
                </h2>
              </Link>
              <p className="text-txtPrimary mt-2 font-medium">{exp.role}</p>
            </div>
            <div>
              <p className="text-blue-500 font-mono">
                {exp.time.fromDateToDate}
              </p>
              <p className="text-blue-500 font-mono text-center">
                {exp.time.total}
              </p>
            </div>
          </div>
          {exp.projects.map((project, idx) => (
            <div key={project.name} className="my-3">
              <h3 className="font-semibold text-txtPrimary text-[20px] flex items-center gap-2">
                <span>
                  <FcEngineering
                    style={{
                      fontSize: "24px",
                      color: "#ffffff",
                    }}
                  />
                </span>
                <span>{project.name}</span>
              </h3>
              <ul className="mt-2">
                <li className="text-[16px] my-4">
                  <strong>Technologies: </strong>{" "}
                  <span>{project.technologies}</span>
                </li>
                <li className="text-[16px] my-4">
                  <strong>My Reponsibility: </strong>{" "}
                  <ul className="list-disc px-8 leading-10">
                    {project.reponsibility.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
