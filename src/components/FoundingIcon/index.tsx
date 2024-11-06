import Container from "../Container";
import Text from "../Text";
import Title from "../Title";
import data from "./data";

const FoundingIcons = () => {
  return (
    <>
      <>
        <Container flex>
          <div className="w-auto mx-auto">
            <Title className="text-left ">{data.title}</Title>
            {/* images section */}
            <div className="flex gap-5 md:w-full w-mobile mx-auto">
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
    </>
  );
};

export default FoundingIcons;
