import { ALL_NAME_PLATE } from "../../assets/images";
import SectionWithTwoImages from "../Section/SectionWithTwoImages";
// import data from "./data";
import altData from "./alt_data";

export const NamePlate = () => {
  return (
    <>
      <SectionWithTwoImages
        data={altData}
        isSlide={true}
        thirdImage={ALL_NAME_PLATE}
      />
    </>
  );
};
