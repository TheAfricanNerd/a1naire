import { useEffect, useRef, useState } from "react";
// import InstagramEmbed from "../InstagramEmbed";
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
    setSlideWidth(w / 4.1);
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
            // <span className="" >
            <Link
              to={image.link}
              target="_blank"
              className="px-1"
              key={image.id}
            >
              <img
                src={image?.image.img}
                alt={image?.image.alt}
                className="w-full rounded-2xl"
                style={{
                  width: !isMobile
                    ? slideWidth
                    : slideWidth && slideWidth * 1.5,
                }}
              />
            </Link>
            // </span>
            // <div
            //   key={image.id}
            //   className="p-4 w-full border-2 border-red-500"
            //   // style={{ width: !isMobile ? 900 : 220 }}
            // >
            //   <Link to={image.link} target="_blank" className=" !m-0 !p-0">
            //     <InstagramEmbed igimage={image} width={slideWidth} />
            //   </Link>
            // </div>
          ))}
        </Slider>

        <Link to={regLink} target="_blank">
          <button className="block border-2 border-black  text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold  md:px-2 py-3 md:py-5 my-5 md:text-black  cursor-pointer md:w-[30%] md:max-w-[70%] w-[90%]">
            See more on Instagram @A1naire
          </button>

          <img />
        </Link>
      </Container>
    </div>
  );
};

export default InstagramSection;
