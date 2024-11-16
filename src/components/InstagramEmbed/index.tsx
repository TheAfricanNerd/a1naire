import { useEffect } from "react";
import useMedia from "../../hook/useMedia";
import { IIGImage } from "../InstagramSection/data";

interface InstaInter {
  width?: number;
  igimage?: IIGImage;
}
const InstagramEmbed = ({ width, igimage }: InstaInter) => {
  // Clean up the script on component unmount
  const isMobile = useMedia().isMobile;

  useEffect(() => {
    // Load the Instagram embed script

    return () => {
      // Clean up the script on component unmount
    };
  }, []);

  return (
    <div>
      <img
        src={igimage?.image.img}
        alt={igimage?.image.alt}
        className="w-full rounded-2xl"
        style={{ width: !isMobile ? width : width && width * 1.5 }}
      />
    </div>
  );
};

export default InstagramEmbed;
