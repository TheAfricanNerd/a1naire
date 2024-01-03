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
// import Container from "../Container";

const MyGallery = () => {
  const images = [
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    ELEVEN,
    TWELVE,
  ];

  return (
    <>
      <Section>
        <div className="grid gap-0 md:gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 ">
          {images.map((image, index) => (
            <img key={index} src={image.img} alt={image.alt} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default MyGallery;
