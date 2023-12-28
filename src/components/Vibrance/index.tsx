import Container from "../Container";
import Text from "../Text";
import Title from "../Title";
import data from "./data";

const Vibrance = () => {
  return (
    <>
      <Container>
        <div className="w-auto mx-auto">
          <Title>{data.title}</Title>
          {/* images section */}
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <img
                src={data.image.img}
                alt={data.image.alt}
                className="w-full"
              />
            </div>
          </div>

          {/* text section */}
          <div>
            <Text>{data.text}</Text>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Vibrance;
