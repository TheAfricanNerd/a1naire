import Container from "../Container";
import Text from "../Text";
import Title from "../Title";
import data from "./data";

const UltraPilots = () => {
  return (
    <>
      <Container flex>
        <div className="w-auto mx-auto">
          <Title right className="text-gold">
            {data.title}
          </Title>
          {/* images section */}
          <div className="flex flex-col md:flex-row md:gap-5 gap-0 w-full">
            {data.images.map((image, i) => (
              <div key={i} className="w-full md:w-1/2">
                <img src={image.img} alt={image.alt} className="w-full" />
              </div>
            ))}
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

export default UltraPilots;
