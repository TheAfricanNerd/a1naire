// import Container from "../Container";
import SectionWithSlider from "../Section/SectionWithSlider";
// import Text from "../Text";
// import Title from "../Title";
import data from "./data";

const Vibrance = () => {
  return (
    <>
      {/* <Container>
        <div className="w-auto mx-auto">
          <Title>{data.title}</Title>
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <img
                src={data.image.img}
                alt={data.image.alt}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <Text className="text-left">{data.text}</Text>
          </div>
        </div>
      </Container> */}

      <SectionWithSlider data={data} />
    </>
  );
};

export default Vibrance;
