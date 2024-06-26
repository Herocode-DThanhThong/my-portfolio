import React from "react";
import { SiSpringboot } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { skillList } from "@/data";
type Props = {};

const Technical = (props: Props) => {
  return (
    <>
      <div className="text-txtPrimary">
        <p className="my-3 leading-8 flex items-center gap-2">
          <span>
            <BiLogoReact
              style={{
                fontSize: "24px",
                color: "#22adc9",
              }}
            />
          </span>
          <span>
            <strong className="text-[18px]">Front-end: </strong>
            <span className="font-semibold">{skillList.fe}</span>
          </span>
        </p>
        <p className="my-3 leading-8 flex gap-2 items-center">
          <span>
            <SiSpringboot
              style={{
                fontSize: "24px",
                color: "#22c93e",
              }}
            />
          </span>
          <span>
            <strong className="text-[18px]">Back-end: </strong>
            <span className="font-semibold">{skillList.be}</span>
          </span>
        </p>
        <p className="my-3 leading-8 flex gap-2 items-center">
          <span>
            <BsDatabase
              style={{
                fontSize: "24px",
                color: "#ccc",
              }}
            />
          </span>
          <span>
            <strong className="text-[18px]">Database: </strong>
            <span className="font-semibold">{skillList.db}</span>
          </span>
        </p>
        <p className="my-3 leading-8 flex gap-2 items-center">
          <span>
            <AiOutlineCode
              style={{
                fontSize: "24px",
                color: "#1c1c1c",
              }}
            />
          </span>
          <span>
            <strong className="text-[18px]">Other: </strong>
            <span className="font-semibold">{skillList.other}</span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Technical;
