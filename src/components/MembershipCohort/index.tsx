import { Link } from "react-router-dom";
import { LOGO_WHITE } from "../../assets/images";
import Section from "../Section";
import Text from "../Text";
import Title from "../Title";
import { Outline } from "../button";
import data from "./data";

const MembershipCohort = () => {
  return (
    <>
      <div className=" bg-bg-image">
        <div className="text-white flex flex-col items-center pt-20">
          <img src={LOGO_WHITE.img} alt={LOGO_WHITE.alt} />
          <Title>
            <span className=" text-4xl">Early Adopters Membership Cohort</span>
          </Title>
          <Title>
            <span className=" text-3xl">Accepting 10 Members</span>
          </Title>
        </div>
        {data.map((datum, index) => (
          <Section data={datum} white={true} key={index}></Section>
        ))}

        <div className="pb-20 w-mobile md:w-largeDesktop mx-auto text-white flex flex-col items-center border-t-2 border-slate-300 pt-10">
          <Outline isTight>
            <span className="text-2xl text-center">
              Reserve Membership: <br />
              $10,000
            </span>
          </Outline>

          <Title>
            <span className="text-2xl">Not ready to become a member?</span>
          </Title>

          <Outline isTight>Sign up to get updates</Outline>

          <Text>
            Contact Us <br />
            305-981-6790 <br />
            <Link to={"mailto:discover@a1naire.com"}>discover@a1naire.com</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export default MembershipCohort;
