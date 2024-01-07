// import { Gallery } from "react-grid-gallery";
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
// import Container from "../Container";

const MyGallery = () => {
  const images = [
    { image: ONE, isLimited: false },
    { image: TWO, isLimited: false },
    { image: THREE, isLimited: false },
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
            <div className="relative">
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
    </div>
  );
};

export default MyGallery;
