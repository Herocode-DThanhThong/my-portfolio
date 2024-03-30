import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FcApproval } from "react-icons/fc";
type Props = {};

const English = (props: Props) => {
  return (
    <div id="english" className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">English</h1>
      <div className="my-6">
        <ul>
          <li>
            <div className="flex items-center gap-2">
              <span>
                <LiaCertificateSolid
                  style={{
                    fontSize: "24px",
                    color: "rgb(251 191 36)",
                  }}
                />
              </span>
              <span className="text-txtPrimary uppercase font-semibold">
                TOEIC Certificate - overall: 730 / 990
              </span>
            </div>
            <ul className="list-disc px-6 leading-8 mt-2">
              <li>Listening: 410 / 495</li>
              <li>Reading: 320 / 495</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <ul>
          <li>
            <div className="flex items-center gap-2">
              <span>
                <LiaCertificateSolid
                  style={{
                    fontSize: "24px",
                    color: "rgb(251 191 36)",
                  }}
                />
              </span>
              <span className="text-txtPrimary uppercase font-semibold">
                Vietnamese Standardized Test of English Proficiency (VSTEP)
              </span>
            </div>
            <ul className="list-disc px-6 leading-8 mt-2">
              <li>Level: B1</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <ul>
          <li>
            <div className="flex items-center gap-2">
              <span>
                <FcApproval
                  style={{
                    fontSize: "24px",
                  }}
                />
              </span>
              <span className="text-txtPrimary uppercase font-semibold">
                English for work!
              </span>
            </div>
            <ul className="list-disc px-6 leading-8 mt-2">
              <li>
                For Reading: I can comfortably read and interpret documentation,
                project specifications, and work totally in English.
              </li>
              <li>
                or Speaking: I am capable of basic communication and am always
                striving to improve everyday. I am now practicing communication
                with a native teacher every weekend.
              </li>
              <li>
                I would really like the opportunity to work at your
                organization, where I would be able to practice my ability to
                speak English.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default English;
