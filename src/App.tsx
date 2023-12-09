import { motion } from "framer-motion";
import "./app.css";
// import CAR_INTERIOR from "./assets/images/jpg/car_interior.jpeg";
import LOGO from "./assets/images/png/a1naire-logo.png";
import LOGO_BLACK from "./assets/images/png/a1naire-logo-black.png";
import ENVELOP from "./assets/images/svg/envelop-black.svg";
import { CHILD_ANIMATION, PARENT_ANIMATION } from "./utils";
import Video from "./assets/videos/bg_video.mp4";
import Slider from "react-slick";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button, { Outline } from "./button";
import { Link } from "react-router-dom";
import useMedia from "./hook/useMedia";

function App() {
  const isMobile = useMedia().isMobile;
  // this is two
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
  };
  //  this is one

  return (
    <>
      <motion.section
        variants={PARENT_ANIMATION()}
        initial="hidden"
        animate="visible"
        className="w-full relative max-w-full"
      >
        <div className="inner w-full md:h-auto h-[100svh] md:w-[80%] flex m-auto items-center justify-center mt-0 md:mt-20 ">
          {/* video section */}
          <motion.div
            variants={CHILD_ANIMATION()}
            className="left w-full md:w-[420px] md:rounded-2xl overflow-hidden border-none object-cover md:h-auto h-[100svh] absolute md:relative
              shadow-2xl shadow-black
            "
          >
            {isMobile ? (
              <div className="absolute  bg-black w-full h-full bg-opacity-40"></div>
            ) : (
              ""
            )}

            <video
              className="object-cover h-full"
              src={Video}
              autoPlay={true}
              width={"100%"}
              playsInline
              loop
              muted
            />
          </motion.div>
          {/* end of video section */}

          {/* text section */}
          <div className="right md:w-1/2 w-[80%] top-10">
            <motion.div
              variants={CHILD_ANIMATION({ delayChild: 1.3 })}
              className="carosel-text text-center"
            >
              <img
                src={isMobile ? LOGO : LOGO_BLACK}
                alt={"black logo"}
                className="mx-auto my-10"
                width={200}
              />
              <Slider {...settings}>
                {data.map((item) => (
                  <div key={item.id}>
                    <h2 className="text-white md:text-black text-2xl md:text-4xl w-[100%] md:w-2/3 mx-auto my-5">
                      {item.h2}
                    </h2>
                  </div>
                ))}
              </Slider>

              <div className="buttons flex flex-col items-center mt-7 md:w-1/2 w-full mx-auto">
                <Link
                  to={"https://getwaitlist.com/waitlist/11137"}
                  className="w-full"
                >
                  <Button dark>Join the Waitlist</Button>
                </Link>
                <Link to={"mailto:discover@a1naire.com"} className="w-full">
                  <Outline color="white">
                    <img src={ENVELOP} alt="envelop" />
                    Contact us
                  </Outline>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* end of text section */}
        </div>
      </motion.section>
    </>
  );
}

export default App;
