import { ReactNode, useRef } from "react";
import Slider from "react-slick";
// import { CHEVRON_LEFT, CHEVRON_RIGHT } from "../../assets/images";
import useMedia from "../../hook/useMedia";
import Container from "../Container";
import { IImage } from "../../assets/images";
// import Title from "../Title";
// import Text from "../Text";
interface InnerData {
  id?: string | number;
  h2?: string | ReactNode;
  p?: string | ReactNode;
  image?: IImage;
}
interface Props {
  children?: ReactNode;
  data?: InnerData[];
  flex?: boolean;
  Settings?: object;
}

const FadeSlider = ({ children, data, flex = false, Settings }: Props) => {
  const isMobile = useMedia().isMobile;
  const sliderRef = useRef<Slider>(null);

  // const next = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const previous = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  const settings = Settings ?? {
    mobileFirst: true,
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
    // variableWidth: !isMobile ?? true,
    variableWidth: false,
    className: "mySlider",
  };

  return (
    children ?? (
      <>
        <Container flex={flex} my={["2", "2"]} className="!my-0">
          <div className="w-auto mx-auto">
            {/* <Title>{data?.title}</Title> */}
            <div className="h-auto w-[95%] md:w-largeDesktop">
              <Slider ref={sliderRef} {...settings}>
                {data?.map((item) => (
                  <div
                    key={item?.id}
                    className="p-4 w-full"
                    style={{ width: !isMobile ? "80%" : "100%" }}
                  >
                    <img
                      src={item?.image?.img}
                      alt={item?.image?.alt}
                      className="w-full "
                      style={{ width: !isMobile ? "100%" : "100%" }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* <div className="flex w-mobile md:w-largeDesktop gap-3 justify-center md:justify-end">
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
            </div> */}

            {/* <div>
              <Text>{data?.text}</Text>
            </div> */}
          </div>
        </Container>
      </>
    )
  );
};

export default FadeSlider;
