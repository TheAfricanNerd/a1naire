import "../../app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useRef } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Slider from "react-slick";
import useMedia from "../../hook/useMedia";
import Text from "../Text";
import { CHEVRON_LEFT, CHEVRON_RIGHT } from "../../assets/images";
import "./myslider.css";

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
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = Settings ?? {
    mobileFirst: true,
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
    // variableWidth: !isMobile ?? true,
    variableWidth: true,
    className: "mySlider",
  };

  return (
    children ?? (
      <>
        <Container flex={flex} my={["2", "2"]}>
          <div className="w-auto mx-auto">
            <Title>{data?.title}</Title>
            <div className="h-auto w-[95%] md:w-largeDesktop">
              <Slider ref={sliderRef} {...settings}>
                {data?.slides?.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 w-full"
                    style={{ width: !isMobile ? 900 : 320 }}
                  >
                    <img
                      src={item?.image?.img}
                      alt={item?.image?.alt}
                      className="w-full "
                      style={{ width: !isMobile ? 900 : 320 }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="flex w-mobile md:w-largeDesktop gap-3 justify-center md:justify-end">
              <span
                className="block w-max text-2xl border-2 p-2 rounded-full"
                onClick={previous}
              >
                <img src={CHEVRON_LEFT.img} alt={CHEVRON_LEFT.alt} />
              </span>
              <span
                className="block w-max text-2xl border-2 p-2 rounded-full"
                onClick={next}
              >
                <img src={CHEVRON_RIGHT.img} alt={CHEVRON_RIGHT.alt} />
              </span>
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
