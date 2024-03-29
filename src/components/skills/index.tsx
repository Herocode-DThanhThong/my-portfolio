import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoAngular } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoDocker } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">Skills</h1>
      <p className="my-4 font-medium text-txtPrimary text-[18px] items-center">
        Programming Languages & Tools:
      </p>
      <div className="flex gap-6 flex-wrap">
        <AiFillHtml5
          style={{
            fontSize: "42px",
            color: "#e62719",
          }}
        />

        <BiLogoCss3
          style={{
            fontSize: "42px",
            color: "#0362fc",
          }}
        />

        <BiLogoJavascript
          style={{
            fontSize: "42px",
            color: "#fce803",
          }}
        />

        <SiTypescript
          style={{
            fontSize: "42px",
            color: "#1356f1",
          }}
        />

        <SiTailwindcss
          style={{
            fontSize: "42px",
            color: "#0362fc",
          }}
        />

        <BiLogoReact
          style={{
            fontSize: "42px",
            color: "#22adc9",
          }}
        />

        <TbBrandNextjs
          style={{
            fontSize: "42px",
            color: "#000",
          }}
        />

        <BiLogoAngular
          style={{
            fontSize: "42px",
            color: "#e62719",
          }}
        />

        <SiMui
          style={{
            fontSize: "42px",
            color: "#004cff",
          }}
        />

        <SiSpringboot
          style={{
            fontSize: "42px",
            color: "#22c93e",
          }}
        />
        <AiFillGithub
          style={{
            fontSize: "42px",
            color: "#000",
          }}
        />
        <div>
          <BiLogoDocker
            style={{
              fontSize: "42px",
              color: "#1356f1",
            }}
          />
        </div>

        <div>
          <BiLogoPostgresql
            style={{
              fontSize: "42px",
              color: "#1480e6",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
