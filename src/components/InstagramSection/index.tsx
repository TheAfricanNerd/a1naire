import { useEffect, useRef, useState } from "react";
import InstagramEmbed from "../InstagramEmbed";
import Slider from "react-slick";

import useMedia from "../../hook/useMedia";
import Container from "../Container";
import Title from "../Title";
import { Link } from "react-router-dom";
import data from "./data";

const InstagramSection = () => {
  const isMobile = useMedia().isMobile;
  const sliderRef = useRef<Slider>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(222);

  const regLink = `https://instagram.com/a1naire`;

  const settings = {
    mobileFirst: true,
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
    // variableWidth: !isMobile ?? true,
    variableWidth: true,
    className: "mySlider",
  };

  useEffect(() => {
    window.innerWidth;
    console.log(console.log({ cref: cRef.current?.children[0] }));

    const w = cRef.current?.children[0].clientWidth ?? 1;
    setSlideWidth(w / 4.45);
    // const w = cRef.current?.children[0].clientWidth ?? 1;
    // setSlideWidth(w / 4.45);
  }, []);
  return (
    <div ref={cRef} className="flex mx-auto">
      <Container my={["2", "2"]} className="!my-2">
        <div>
          <Title>Recent Rides on A1naire</Title>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {data.map((image) => (
            <div
              key={image.id}
              className="p-4 w-full"
              // style={{ width: !isMobile ? 900 : 220 }}
            >
              <Link to={image.link} target="_blank">
                <InstagramEmbed igimage={image} width={slideWidth} />
              </Link>
            </div>
          ))}
        </Slider>

        <Link to={regLink} target="_blank">
          <button className="block bg-black hover:bg-slate-900 text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold p-2 md:px10 py-3 md:py-5 my-5 text-white cursor-pointer md:w-[30%] md:max-w-[70%] w-[90%]">
            See more on Instagram @A1naire
          </button>

          <img />
        </Link>
      </Container>
    </div>
  );
};

export default InstagramSection;
