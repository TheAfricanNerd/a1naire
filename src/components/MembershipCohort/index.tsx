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
      <div className=" bg-black">
        <div className="text-white flex flex-col items-center pt-20 md:w-largeDesktop w-mobile mx-auto ">
          <img
            src={LOGO_WHITE.img}
            alt={LOGO_WHITE.alt}
            className="w-1/3 md:w-1/6"
          />
          <Title className="md:my-0 my-0">
            <span className="text-4xl">Early Adopters Membership Cohort</span>
          </Title>
          <Title>
            <span className=" text-3xl">Accepting 10 Members</span>
          </Title>
        </div>
        {data.map((datum, index) => (
          <Section
            data={datum}
            white={true}
            key={index}
            className="text-center !my-50"
            titleClass="!my-0 !md:my-0 "
          ></Section>
        ))}

        <div className="pb-20 w-mobile md:w-largeDesktop mx-auto text-white flex flex-col items-center  ">
          <Link to={"https://buy.stripe.com/bIY3fA4133J0g9i149"}>
            <Outline isTight>
              <span className="text-2xl text-center">
                Reserve Membership: <br />
                $10,000
              </span>
            </Outline>
          </Link>

          <Title className="!my-2">
            <span className="text-2xl ">Not ready to become a member?</span>
          </Title>

          <Link to={"https://getwaitlist.com/waitlist/11137"}>
            <Outline isTight>Sign up to get updates</Outline>
          </Link>

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
