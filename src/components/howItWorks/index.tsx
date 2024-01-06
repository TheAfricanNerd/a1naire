import Container from "../Container";
import Text from "../Text";
import data from "./data";

const HowItWorks = () => {
  return (
    <>
      <Container hardFlex={true} className="my-0 !gap-2">
        {/* left side */}
        <div className="w-auto md:w-1/4 ">
          <img src={data.image.img} alt={data.image.alt} className=" w-full" />
        </div>
        {/* right side */}
        <div className=" w-myMobile mx-0 md:w-2/3 ">
          {/* <h3 className=" md:text-5xl leading-loose"> {data.text} </h3> */}
          <Text className=" text-left text-sm md:text-4xl !mx-0 !w-[95%]">
            {data.text}
          </Text>
        </div>
      </Container>
    </>
  );
};

export default HowItWorks;
