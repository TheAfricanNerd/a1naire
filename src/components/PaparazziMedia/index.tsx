import Container from "../Container";
import ImageSlideShow from "../ImageSlideShow";
// import Section from "../Section";
import Title from "../Title";
import data from "./data";
import desktopData from "./data_desktop";
import Text from "../Text";
// import useMedia from "../../hook/useMedia";

const PaparazziMedia = () => {
  // const mobile = useMedia().isMobile;
  return (
    <>
      {/* {mobile ? (
        <Section data={data}></Section>
      ) : (
        <Container>
          <div className={`w-auto mx-auto`}>
            <Title>{data?.title}</Title>
            <ImageSlideShow data={desktopData} />

            <div className="w-full">
              {data?.subImage && (
                <img
                  src={data?.subImage?.img}
                  alt={data?.subImage?.alt}
                  className=" w-[80%] mx-auto my-10"
                />
              )}
            </div>

            <div>
              <Text>{data?.text}</Text>
            </div>
          </div>
        </Container>
      )} */}

      <Container>
        <div className={`w-auto mx-auto`}>
          <Title>{data?.title}</Title>
          <ImageSlideShow data={desktopData} />

          <div className="w-full">
            {data?.subImage && (
              <img
                src={data?.subImage?.img}
                alt={data?.subImage?.alt}
                className=" w-[80%] mx-auto my-10"
              />
            )}
          </div>

          <div>
            <Text>{data?.text}</Text>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaparazziMedia;
