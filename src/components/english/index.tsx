import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FcApproval } from "react-icons/fc";
import { english } from "@/data";
type Props = {};

const English = (props: Props) => {
  return (
    <div id="english" className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">English</h1>
      {english.map((eng, idx) => (
        <div key={idx} className="my-6">
          <ul>
            <li>
              <div className="flex items-center gap-2">
                <span>
                  {eng.certificate ? (
                    <LiaCertificateSolid
                      style={{
                        fontSize: "24px",
                        color: "rgb(251 191 36)",
                      }}
                    />
                  ) : (
                    <FcApproval
                      style={{
                        fontSize: "24px",
                      }}
                    />
                  )}
                </span>
                <span className="text-txtPrimary uppercase font-semibold">
                  {eng.title}
                </span>
              </div>
              <ul className="list-disc px-6 leading-8 mt-2">
                {eng.detail.map((item, idx) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default English;
