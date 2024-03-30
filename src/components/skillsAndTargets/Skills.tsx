import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoReact,
} from "react-icons/bi";
import {
  SiMui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
type Props = {};

const Skills = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default Skills;
