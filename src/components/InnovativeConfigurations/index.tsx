import data from "./data";
import dataDesktop from "./data_mobile";
import SectionWithSlider from "../Section/SectionWithSlider";
import useMedia from "../../hook/useMedia";

const InnovativeConfigurations = () => {
  const mobile = useMedia().isMobile;

  return (
    <>
      {mobile ? (
        <SectionWithSlider data={data}></SectionWithSlider>
      ) : (
        <SectionWithSlider data={dataDesktop}></SectionWithSlider>
      )}
    </>
  );
};

export default InnovativeConfigurations;
