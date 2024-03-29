import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div className="">
        <h1 className="text-txtPrimary font-bold text-xl">Contact me</h1>
        <div className="my-4 flex items-center gap-2">
          <BiLogoGmail
            style={{
              fontSize: "24px",
              color: "#e60505",
            }}
          />
          <p className="text-sky-600 underline">
            duongthanhthong0611@gmail.com
          </p>
        </div>
        <div className="my-4 flex items-center gap-2">
          <AiFillLinkedin
            style={{
              fontSize: "24px",
              color: "#055be6",
            }}
          />
          <Link
            className="text-sky-600 block"
            href={
              "https://www.linkedin.com/in/th%C3%B4ng-d%C6%B0%C6%A1ng-0113182b7/"
            }
            target="_blank"
          >
            Linkedin - Duong Thanh Thong
          </Link>
        </div>
        <div className="my-4 flex items-center gap-2">
          <AiFillGithub
            style={{
              fontSize: "24px",
              color: "#000",
            }}
          />
          <Link
            className="text-sky-600 block"
            href={"https://github.com/Herocode-DThanhThong"}
            target="_blank"
          >
            Github - Duong Thanh Thong
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
