import { ReactNode } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Text from "../Text";
import { IImage } from "../../assets/images";
import FadeSlider from "./FadeSlider";

interface InnerData {
  id?: string | number;
  h2?: string | ReactNode;
  p?: string | ReactNode;
  image?: IImage;
}
interface Props {
  children?: ReactNode;
  data?: PropData;
  flex?: boolean;
  white?: boolean;
  className?: string;
  isSlide?: boolean;
  slide1?: InnerData[];
  slide2?: InnerData[];
}

const SectionWithTwoImages = ({
  children,
  data,
  flex = false,
  white = false,
  className,
  isSlide = false,
}: Props) => {
  return (
    children ?? (
      <>
        <Container white={white} flex={flex} className={className}>
          <div className={`w-auto mx-auto ${white && "text-white"}`}>
            <Title>{data?.title}</Title>
            {/* images section */}
            {!isSlide ? (
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <img
                    src={data!.images![0].img}
                    alt={data!.images![0].alt}
                    className=" w-full"
                  />
                </div>
              </div>
            ) : (
              <FadeSlider data={data?.slide1} />
            )}

            {/* text section */}
            <div>
              <Text>{data?.text}</Text>
            </div>
            <div className="w-full">
              {!isSlide ? (
                <img
                  src={data!.images![1].img}
                  alt={data!.images![1].alt}
                  className=" w-full"
                />
              ) : (
                <FadeSlider data={data?.slide2} />
              )}
              <p className="text-sm italic mx-[7.5%] my-2">
                This feature arrives in Q3 of 2024
              </p>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default SectionWithTwoImages;
