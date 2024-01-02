import Section from "../Section";
import data from "./data";

const MembershipCohort = () => {
  return (
    <>
      <div className=" bg-bg-image">
        {data.map((datum, index) => (
          <Section data={datum} white={true} key={index}></Section>
        ))}
      </div>
    </>
  );
};

export default MembershipCohort;
