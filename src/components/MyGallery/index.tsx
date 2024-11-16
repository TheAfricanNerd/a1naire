// import { Gallery } from "react-grid-gallery";
import { Link } from "react-router-dom";
import {
  EIGHT,
  ELEVEN,
  FIVE,
  FOUR,
  INSTAGRAM,
  NINE,
  ONE,
  SEVEN,
  SIX,
  TEN,
  THREE,
  TWELVE,
  TWO,
} from "../../assets/images";
import Section from "../Section";
import Text from "../Text";
import Title from "../Title";
import { waitlistLink } from "../header";
import FoundingIcons from "../FoundingIcon";
import InstagramSection from "../InstagramSection";
// import Button from "../button";
// import Container from "../Container";

interface IGallery {
  reference: string | null;
}
const MyGallery = ({ reference }: IGallery) => {
  const images = [
    { image: THREE, isLimited: false },
    { image: ONE, isLimited: false },
    { image: TWO, isLimited: false },
    { image: FOUR, isLimited: false },
    { image: FIVE, isLimited: false },
    { image: SIX, isLimited: true },
    { image: SEVEN, isLimited: false },
    { image: EIGHT, isLimited: false },
    { image: NINE, isLimited: false },
    { image: TEN, isLimited: false },
    { image: ELEVEN, isLimited: false },
    { image: TWELVE, isLimited: true },
  ];

  //  ? `https://ride.a1naire.com/register?ref=${reference}`
  const regLink = reference
    ? `https://ride.a1naire.com/reservations`
    : `https://ride.a1naire.com/reservations`;
  // const regLink = reference
  //   ? `https://ride.a1naire.com/register?ref=${reference}`
  //   : `https://ride.a1naire.com/`;
  return (
    <div className="">
      <Section>
        <Title className="my-0">The Fleet We Are Building</Title>
        <Text className="my-2 ">
          {" "}
          Membership gets you unlimited access to the following vehicles that we
          are adding to our fleet.
        </Text>
        <div className="grid gap-0 md:gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 md:w-largeDesktop w-full mx-auto">
          {images.map((image, index) => (
            <div className="relative" key={index}>
              <h3 className="absolute bottom-2 right-2 text-xl text-white font-bold italic drop-shadow-Text shadow-black ">
                {" "}
                {image.image.alt}
              </h3>

              {image.isLimited && (
                <h3 className="absolute top-2 left-2 text-sm text-white font-bold italic drop-shadow-Text shadow-black ">
                  Limited Edition
                </h3>
              )}
              <img key={index} src={image.image.img} alt={image.image.alt} />
            </div>
          ))}
        </div>
      </Section>

      {/* Founding Icon membership */}
      <FoundingIcons />

      <InstagramSection />

      <Link to={regLink}>
        <button className="block bg-black hover:bg-slate-900 text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-3 md:py-5 my-5 text-white cursor-pointer md:w-[30%] md:max-w-[70%] w-[90%]">
          Book a ride
        </button>
      </Link>

      <Link to={waitlistLink}>
        <button className="block border-4 border-black  text-xl md:text-2xl rounded-md mx-auto drop-shadow-sm font-bold  md:px-10 py-3 md:py-5 my-5 md:text-black  cursor-pointer md:w-[30%] md:max-w-[70%] w-[90%]">
          Inquire about membership
        </button>
      </Link>

      <section className="">
        <h3 className="text-3xl text-center">Connect with us</h3>

        <div className="text-center text-xl mb-10">
          <Link
            className="flex gap-2 w-max mx-auto"
            to={"https://www.instagram.com/a1naire/"}
            target="_"
          >
            <img
              className=""
              width={20}
              src={INSTAGRAM.img}
              alt={INSTAGRAM.alt}
            />
            instagram
          </Link>
          <Link to={"mailto:discover@a1naire.com"}>Discover@a1naire.com </Link>{" "}
          <br />
          <Link to={"tel:305-981-6790"}>305-981-6790</Link>
        </div>
      </section>
    </div>
  );
};

export default MyGallery;
