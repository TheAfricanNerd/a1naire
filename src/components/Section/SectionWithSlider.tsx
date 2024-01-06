import "../../app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Slider from "react-slick";
import useMedia from "../../hook/useMedia";
import Text from "../Text";

interface Props {
  children?: ReactNode;
  data?: PropData;
  flex?: boolean;
  Settings?: object;
}

const SectionWithSlider = ({
  children,
  data,
  flex = false,
  Settings,
}: Props) => {
  const isMobile = useMedia().isMobile;

  const settings = Settings ?? {
    mobileFirst: true,
    dots: isMobile ? true : false,
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
    children ?? (
      <>
        <Container flex={flex} my={["5", "5"]}>
          <div className="w-auto mx-auto">
            <Title>{data?.title}</Title>
            <div className="h-auto w-mobile md:w-largeDesktop">
              <Slider {...settings}>
                {data?.slides?.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 w-full"
                    style={{ width: !isMobile ? 900 : 380 }}
                  >
                    <img
                      src={item?.image?.img}
                      alt={item?.image?.alt}
                      className="w-full "
                      style={{ width: !isMobile ? 900 : 380 }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div>
              <Text>{data?.text}</Text>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default SectionWithSlider;
