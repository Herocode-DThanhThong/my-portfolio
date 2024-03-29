import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">
        Education
      </h1>
      {/* School */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"https://www.ctu.edu.vn/"} target="_blank">
              <h2 className="font-bold text-[#169DFE] text-2xl flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all ease-in-out duration-300">
                <span>Can Tho University</span>
                <span>
                  <BiLinkExternal />
                </span>
              </h2>
            </Link>
            <p className="text-txtPrimary mt-2 font-medium">
              Software Engineering
            </p>
          </div>
          <p className="text-blue-500 font-mono">Oct 2020 – Dec 2023</p>
        </div>

        <ul className="list-disc px-6 leading-10 mt-2">
          <li>
            After 3.5 years in college, I successfully completed a graduate
            thesis on programming: Using ReactJs and Java Springboot to build
            &quot;
            <span className="italic font-semibold">
              A programing learning website with integrated Q&A community
            </span>
            &quot;.
          </li>
          <li>
            My graduation thesis received a 9.02 / 10, and{" "}
            <strong>
              I&apos;am also one of two student graduated ahead of schedule
              (early 1 year - 3.5 year / 4.5 year)
            </strong>
            . That particular moment made me really happy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
