// import { Gallery } from "react-grid-gallery";
import { Link } from "react-router-dom";
import {
  EIGHT,
  ELEVEN,
  FIVE,
  FOUR,
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
    ? `https://ride.a1naire.com/register?ref=${reference}`
    : `https://ride.a1naire.com/`;
  return (
    <div className="">
      <Section>
        <Title className="my-0">Fleet Details</Title>
        <Text className="my-2 ">
          {" "}
          Membership gets you unlimited access to the following vehicles.
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

      {/* <Link to={regLink}>
        <button className="block bg-[#42b72a] hover:bg-[#42b72ac5] text-2xl md:text-4xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-5 md:py-8 my-5 text-white cursor-pointer">
          Start Using A1naire
        </button>
      </Link> */}
      <Link to={regLink}>
        <button className="block bg-black hover:bg-slate-900 text-2xl md:text-4xl rounded-md mx-auto drop-shadow-sm font-bold p-10 md:px-40 py-5 md:py-8 my-5 text-white cursor-pointer">
          Book a ride
        </button>
      </Link>

      <section className="">
        <h3 className="text-3xl text-center">Contact us</h3>

        <div className="text-center text-xl mb-10">
          <Link to={"mailto:discover@a1naire.com"}>Discover@a1naire.com </Link>
        </div>
      </section>
    </div>
  );
};

export default MyGallery;
