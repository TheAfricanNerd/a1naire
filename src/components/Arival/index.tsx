import Container from "../Container";
import Text from "../Text";
import Title from "../Title";
import data from "./data";

const Arival = () => {
  return (
    <>
      <Container flex>
        <div className="w-auto mx-auto">
          <Title className="text-left">{data.title}</Title>
          {/* images section */}
          <div className="flex gap-5 w-full">
            {data.images.map((image, i) => (
              <div key={i} className="w-1/2">
                <img src={image.img} alt={image.alt} className="w-full" />
              </div>
            ))}
          </div>

          {/* text section */}
          <div>
            <Text className="">{data.text}</Text>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Arival;
