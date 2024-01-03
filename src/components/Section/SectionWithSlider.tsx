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

  !Settings ?? {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
    variableWidth: !isMobile ? false : false,
  };

  return (
    children ?? (
      <>
        <Container flex={flex}>
          <div className="w-auto mx-auto">
            <Title>{data?.title}</Title>
            {/* images section */}
            <div className=" w-mobile md:w-largeDesktop">
              <Slider {...Settings}>
                {data?.slides?.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 w-full "
                    style={{ width: !isMobile ? 900 : 200 }}
                  >
                    <img
                      src={item?.image?.img}
                      alt={item?.image?.alt}
                      className="w-full "
                      style={{ width: !isMobile ? 900 : 200 }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* text section */}
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
