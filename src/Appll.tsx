import { motion } from "framer-motion";
import "./app.css";
// import CAR_INTERIOR from "./assets/images/jpg/car_interior.jpeg";
import LOGO from "./assets/images/png/a1naire-logo.png";
import { CHILD_ANIMATION, PARENT_ANIMATION } from "./utils";
import Video from "./assets/videos/bg_video.mp4";
import Slider from "react-slick";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,

    // slidesToScroll: 1,
  };
  return (
    <>
      <motion.section
        className="w-full relative"
        variants={PARENT_ANIMATION()}
        initial="hidden"
        animate="visible"
      >
        {/* end of the text section */}
        <motion.div
          variants={CHILD_ANIMATION()}
          className="bg-[rgba(0,0,0,0.5)] w-full h-[100vh] absolute"
        ></motion.div>

        {/* text section */}
        <div className="w-full h-full absolute flex items-center justify-center">
          {/* inner hold */}

          {/* start of slider */}
          <Slider {...settings}>
            {data.map((item) => (
              <motion.div
                variants={PARENT_ANIMATION({
                  delayChild: 0.1,
                  staggerChild: 1.2,
                })}
                key={item.id}
                className=" text-white flex flex-col gap-6 items-center md:w-2/3 w-[80%] max-h-[100vh] max-w-[100%] border-2 border-red-600"
              >
                <motion.img
                  variants={CHILD_ANIMATION({ delayChild: 1.3 })}
                  alt="A1naire logo"
                  src={LOGO}
                />
                <motion.h2
                  variants={CHILD_ANIMATION({ delayChild: 1.8 })}
                  className="text-center font-semibold text-2xl md:w-1/2 w-full text-red-600"
                >
                  The world's first and only Ultra Luxurious Ride Hailing
                  Service
                </motion.h2>
                <motion.p
                  variants={CHILD_ANIMATION({ delayChild: 2 })}
                  className="text-center font-semibold text-xl"
                >
                  It's coming...
                </motion.p>
              </motion.div>
            ))}
          </Slider>
          {/* end of slider */}
        </div>

        <div className="">
          {/* <img
            className="w-full md:h-[100vh] h-[100vh] object-cover md:object-[50%] object-[68%]"
            alt="background car image"
            src={CAR_INTERIOR}
          /> */}

          <video
            loop
            autoPlay
            muted
            src={Video}
            className="w-full md:h-[100vh] h-[100vh] object-cover md:object-[50%] object-[68%]"
          ></video>
        </div>
      </motion.section>
    </>
  );
}

export default App;
