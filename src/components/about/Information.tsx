import React from "react";

type Props = {};

const Information = (props: Props) => {
  return (
    <>
      <h1 className="text-4xl uppercase font-bold text-txtPrimary">
        DUONG THANH THONG
      </h1>
      <p className="flex gap-2 my-4 font-medium text-txtPrimary text-[16px] items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </span>
        <span>
          Software engineering -{" "}
          <span className="font-bold text-[18px]">
            {"Frontend Developer (ReactJs)"}
          </span>
        </span>
      </p>
      <p className="flex gap-2 my-4 font-medium text-txtPrimary text-[16px] items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </span>
        <span>Ho Van Hue, Phu Nhuan District, Ho Chi Minh City</span>
      </p>
      <div className="my-3 p-4 border bg-blue-200 shadow-sm rounded-md leading-8 text-txtPrimary font-medium">
        Hi there, welcome to look at my profile! <br /> In{" "}
        <strong>1 years</strong> of JavaScript experience. {"I'm"} passionate
        about creating seamless user experiences and believe that simplifying
        code leads to more agile applications.
      </div>
    </>
  );
};

export default Information;
