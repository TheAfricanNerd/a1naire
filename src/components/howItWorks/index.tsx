import Container from "../Container";
import data from "./data";

const HowItWorks = () => {
  return (
    <>
      <Container flex>
        {/* left side */}
        <div className="w-1/2 md:w-1/4">
          <img src={data.image.img} alt={data.image.alt} className=" w-full" />
        </div>
        {/* right side */}
        <div className=" w-myMobile mx-auto md:w-2/3">
          <h3 className=" md:text-5xl leading-loose"> {data.text} </h3>
        </div>
      </Container>
    </>
  );
};

export default HowItWorks;
