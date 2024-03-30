import Skills from "./Skills";
import Targets from "./Targets";
type Props = {};

const SkillsAndTargets = (props: Props) => {
  return (
    <div id="skills" className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">
        Skills & Targets
      </h1>
      <Skills />
      <Targets />
    </div>
  );
};

export default SkillsAndTargets;
