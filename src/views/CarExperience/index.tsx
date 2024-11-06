import { CAR_EXPERIENCE } from "../../assets/images";

const CarExperience = () => {
  return (
    <div className="mx-auto">
      <img
        className="mx-auto md:w-mobile w-full"
        src={CAR_EXPERIENCE.img}
        alt={CAR_EXPERIENCE.alt}
      />
    </div>
  );
};

export default CarExperience;
