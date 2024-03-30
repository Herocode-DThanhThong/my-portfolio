import React from "react";
import Information from "./Information";
import Technical from "./Technical";
import Contact from "./Contact";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="border-b-2 py-8">
      <Information />
      <Technical />
      <Contact />
    </div>
  );
};

export default About;
