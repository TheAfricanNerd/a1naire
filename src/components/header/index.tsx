import { motion } from "framer-motion";
import "../../app.css";
// import CAR_INTERIOR from "./assets/images/jpg/car_interior.jpeg";
import LOGO from "../../assets/images/png/a1naire-logo.png";
import LOGO_BLACK from "../../assets/images/png/a1naire-logo-black.png";
// import ENVELOP from "../../assets/images/svg/envelop-black.svg";
import { CHILD_ANIMATION, PARENT_ANIMATION } from "../../utils";
import Video from "../../assets/videos/bg_video.mp4";
import Slider from "react-slick";
import data from "./data";
// import Button, { Outline } from "../button";
// import { Link } from "react-router-dom";
import useMedia from "../../hook/useMedia";
import { ARROW_DOWN } from "../../assets/images";
import { Link } from "react-router-dom";

interface IGallery {
  reference: string | null;
}

function Header({ reference }: IGallery) {
  const isMobile = useMedia().isMobile;

  const regLink = reference
    ? `https://ride.a1naire.com/register?ref=${reference}`
    : `https://ride.a1naire.com/register`;
  // bounce
  const bounceVariants = {
    initial: {
      y: 0,
    },
    bounce: {
      y: -40,
      transition: {
        yoyo: Infinity,
        duration: 1.5,
      },
    },
  };

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
              shadow-xl shadow-slate-400
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
          <div className="right md:w-1/2 w-[80%] top-10 ">
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

              {/* <div className="buttons flex flex-col items-center mt-7 md:w-1/2 w-full mx-auto">
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
              </div> */}
            </motion.div>

            <Link to={regLink}>
              <button className="block md:bg-black bg-white hover:bg-slate-900 text-3xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-3 md:py-5 my-5 md:text-white text-black cursor-pointer">
                Book a ride
              </button>
            </Link>

            <div className="md:hidden block w-full">
              <Slider {...settings}>
                <div className="">
                  <p className=" text-white md:text-black text-2xl md:text-2xl w-full mx-auto my-5 text-center ">
                    Scroll down to learn more
                  </p>
                </div>
              </Slider>
            </div>
          </div>

          {/* end of text section */}
        </div>

        <div className="absolute bottom-10 self-center left-[50%] -translate-x-[50%] md:hidden flex">
          <motion.div
            initial="initial"
            animate="bounce"
            variants={bounceVariants}
          >
            <img src={ARROW_DOWN.img} alt={ARROW_DOWN.alt} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Header;
