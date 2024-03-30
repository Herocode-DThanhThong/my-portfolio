import React from "react";

type Props = {};

const Targets = (props: Props) => {
  return (
    <>
      <p className="my-4 font-semibold text-txtPrimary text-[18px] items-center">
        My Objective:
      </p>
      <ul className="list-disc px-6 leading-10">
        <li>
          Improve foreign language skills, and approach IELTS with a goal of{" "}
          <strong>7.0 point</strong>
        </li>
        <li>Master the frontend skills</li>
        <li>Master the backend skills</li>
        <li>Become the fullstack developer</li>
      </ul>
    </>
  );
};

export default Targets;
