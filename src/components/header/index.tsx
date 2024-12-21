import { motion } from "framer-motion";
import "../../app.css";
// import CAR_INTERIOR from "./assets/images/jpg/car_interior.jpeg";
import LOGO from "../../assets/images/png/a1naire-logo.png";
import LOGO_BLACK from "../../assets/images/png/a1naire-logo-black.png";
// import ENVELOP from "../../assets/images/svg/envelop-black.svg";
import { CHILD_ANIMATION, PARENT_ANIMATION } from "../../utils";
import Video from "../../assets/videos/bg_video.mp4";
// import Slider from "react-slick";
import data from "./data";
// import Button, { Outline } from "../button";
// import { Link } from "react-router-dom";
import useMedia from "../../hook/useMedia";
import { ARROW_DOWN } from "../../assets/images";
import { Link } from "react-router-dom";

export const waitlistLink = "https://getwaitlist.com/waitlist/18649";
interface IGallery {
  reference: string | null;
}

function Header({ reference }: IGallery) {
  const isMobile = useMedia().isMobile;

  const chauffeurLink = `https://a1naire.com/bookchauffeur`;

  const regLink = reference
    ? `https://ride.a1naire.com/reservations`
    : `https://ride.a1naire.com/reservations`;
  // bounce
  // const regLink = reference
  //   ? `https://ride.a1naire.com/register?ref=${reference}`
  //   : `https://ride.a1naire.com`;
  // // bounce

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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplaySpeed: 8000,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   arrows: false,
  //   dotsClass: isMobile ? "mobile-dots" : "desktop-dots",
  // };
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
                className="mx-auto my-10 md:w-[25%] w-[45%]"
                width={200}
              />

              <div>
                {data.map((item) => (
                  <div key={item.id}>
                    {/* <h1 className="text-gold text-2xl md:text-5xl leading-normal font-semibold w-[100%] md:w-2/3 mx-auto my-2"> */}
                    <h1 className="text-white md:text-black text-2xl md:text-5xl leading-normal font-semibold w-[100%] md:w-2/3 mx-auto my-2">
                      An Ultra-Luxury Ride Service
                    </h1>
                    <h2 className="text-white md:text-black text-xl md:text-4xl w-[100%] md:w-2/3 mx-auto my-5">
                      {item.h2}
                    </h2>
                  </div>
                ))}
              </div>
            </motion.div>

            <Link to={regLink}>
              <button className="block md:bg-black bg-white hover:bg-slate-900 text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-3 md:py-5 my-5 md:text-white text-black cursor-pointer md:w-2/3 md:max-w-[70%] w-[90%]">
                Book a ride
              </button>
            </Link>

            {/* BOOK A chauffeur */}
            <Link to={chauffeurLink}>
              <button className="block md:bg-black bg-white hover:bg-slate-900 text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-3 md:py-5 my-5 md:text-white text-black cursor-pointer md:w-2/3 md:max-w-[70%] w-[90%]">
                Book a Chauffeur
              </button>
            </Link>

            <Link to={waitlistLink}>
              <button className="block border-4 md:border-black border-white text-md md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold  md:px-10 py-3 md:py-5 my-5 md:text-black text-white cursor-pointer md:w-2/3 md:max-w-[70%] w-[90%]">
                Inquire about membership
              </button>
            </Link>

            {/* <div className="mx-auto w-max mt-20"> */}
            <motion.section
              variants={PARENT_ANIMATION()}
              initial="hidden"
              animate="visible"
              className="mx-auto w-max mt-20"
            >
              <motion.div
                initial="initial"
                animate="bounce"
                variants={bounceVariants}
                className="flex justify-center"
              >
                <img
                  src={ARROW_DOWN.img}
                  alt={ARROW_DOWN.alt}
                  className="w-3/5"
                />
              </motion.div>
            </motion.section>
            {/* </div> */}
          </div>

          {/* end of text section */}
        </div>

        <div></div>

        {/* <div>Scroll down to learn more</div> */}
      </motion.section>
    </>
  );
}

export default Header;
