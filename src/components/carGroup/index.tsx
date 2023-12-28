import Title from "../Title";
import data from "./data";

const CarGroup = () => {
  return (
    <>
      <div className=" md:my-40 my-20 flex flex-col md:w-largeDesktop mx-auto">
        <Title>{data.headerText}</Title>

        <div className="w-full mx-auto ">
          <img
            src={data.image.img}
            alt={data.image.alt}
            className=" mx-auto md:w-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default CarGroup;
