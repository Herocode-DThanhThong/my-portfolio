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
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"https://www.tmasolutions.vn/"} target="_blank">
              <h2 className="font-bold text-[#169DFE] text-2xl flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all ease-in-out duration-300">
                <span>TMA Solutions</span>
                <span>
                  <BiLinkExternal />
                </span>
              </h2>
            </Link>
            <p className="text-txtPrimary mt-2 font-medium">
              Frontend Engineer
            </p>
          </div>
          <div>
            <p className="text-blue-500 font-mono">May 2023 – Mar 2024</p>
            <p className="text-blue-500 font-mono text-center">
              {"(10 months)"}
            </p>
          </div>
        </div>
        <div className="my-3">
          <h3 className="font-semibold text-txtPrimary text-[20px] flex items-center gap-2">
            <span>
              <FcEngineering
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                }}
              />
            </span>{" "}
            <span>Ecommerce Project - Petlove</span>
          </h3>
          <ul className="mt-2">
            <li className="text-[16px] my-4">
              <strong>Technologies: </strong>{" "}
              <span>
                ReactJs, NextJs, Next Auth, Springboot, Redux, Antd Design,
                Gitlab.
              </span>
            </li>
            <li className="text-[16px] my-4">
              <strong>My Reponsibility: </strong>{" "}
              <ul className="list-disc px-8 leading-10">
                <li>Developed features and fixed bugs based on the tickets.</li>
                <li>
                  Collaborated with QA teams to understand, and troubleshoot
                  reported bugs, ensuring prompt resolution.
                </li>
                <li>
                  Utilized Postman to test and validate new APIs, guaranteeing
                  reliable and secure communication between frontend and backend
                  components.
                </li>
                <li>
                  Engaged in code reviews and contributed to improving code
                  quality and maintainability.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h3 className="font-semibold text-txtPrimary text-[20px] flex items-center gap-2">
            <span>
              <FcEngineering
                style={{
                  fontSize: "24px",
                  color: "#ffffff",
                }}
              />
            </span>{" "}
            <span>Network Project - Nokia Altiplano</span>
          </h3>
          <ul className="mt-2">
            <li className="text-[16px] my-4">
              <strong>Technologies: </strong>{" "}
              <span>
                Java, Javascript, Robot Framework, Netconf Yang, FreeMaker,
                Docker, Jenkins, and Jira.
              </span>
            </li>
            <li className="text-[16px] my-4">
              <strong>My Reponsibility: </strong>{" "}
              <ul className="list-disc px-8 leading-10">
                <li>
                  Developed and implemented new features for product releases
                  and user stories.
                </li>
                <li>
                  Conducted critical bug fixes and performed rigorous code
                  reviews to product stability.
                </li>
                <li>
                  Introduced unit testing to enhance development feedback and
                  code quality..
                </li>
                <li>Implementing the automation test using RobotFramework.</li>
                <li>
                  Using Jenkins to automate the build process and merge code to
                  master branch.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
