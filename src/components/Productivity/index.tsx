import Slider from "react-slick";
import useMedia from "../../hook/useMedia";
import Container from "../Container";
import Text from "../Text";
import Title from "../Title";
import data from "./data";
import "../../app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Productivity = () => {
  const isMobile = useMedia().isMobile;
  // this is two
  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
    variableWidth: !isMobile ?? true,
  };

  return (
    <>
      <Container>
        <div className="w-auto mx-auto">
          <Title>{data.title}</Title>
          {/* images section */}
          <div className="w-largeDesktop">
            <Slider {...Settings}>
              {data.slides.map((item) => (
                <div
                  key={item.id}
                  className="p-4"
                  style={{ width: !isMobile ? 900 : 340 }}
                >
                  <img
                    src={item.image.img}
                    alt={item.image.alt}
                    className="w-full"
                  />
                </div>
              ))}
            </Slider>
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

export default Productivity;

// export default Productivity;
