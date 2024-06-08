import Container from "../Container";
import Text from "../Text";
import data from "./data";

const HowItWorks = () => {
  return (
    <>
      <Container className="my-0 !gap-2">
        {/* left side */}

        {/* right side */}
        <div className=" w-myMobile mx-auto md:w-2/3 ">
          {/* <h3 className=" md:text-5xl leading-loose"> {data.text} </h3> */}
          <Text className=" text-left text-sm md:text-4xl !mx-auto !w-[95%]">
            {data.text}
          </Text>
        </div>

        <div className="w-auto mx-auto md:w-1/2 ">
          <img src={data.image.img} alt={data.image.alt} className=" w-full" />
        </div>
      </Container>
    </>
  );
};

export default HowItWorks;
