import { objectives } from "@/data";
import React from "react";

type Props = {};

const Targets = (props: Props) => {
  return (
    <>
      <p className="my-4 font-semibold text-txtPrimary text-[18px] items-center">
        My Objective:
      </p>
      <ul className="list-disc px-6 leading-10">
        {objectives.map((obj, idx) => (
          <li key={obj}>{obj}</li>
        ))}
      </ul>
    </>
  );
};

export default Targets;
