import SectionWithImageGrids from "../Section/SectionWithImageGrids";
import data from "./data";

const UltraLuxryYouDeserve = () => {
  if (data?.images.length != 3) {
    return (
      <h1 className=" text-red-600 text-5xl mx-auto text-center my-20">
        Error: Expected 3 Images
      </h1>
    );
  }
  return <SectionWithImageGrids data={data} />;
};

export default UltraLuxryYouDeserve;
