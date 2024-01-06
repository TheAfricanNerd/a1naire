import { ReactNode } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Text from "../Text";
import { IImage } from "../../assets/images";

interface Props {
  children?: ReactNode;
  data?: PropData;
  flex?: boolean;
  white?: boolean;
  className?: string;
}

const SectionWithTwoImages = ({
  children,
  data,
  flex = false,
  white = false,
  className,
}: Props) => {
  const first: IImage = data!.images![0];
  const second: IImage = data!.images![1];
  return (
    children ?? (
      <>
        <Container white={white} flex={flex} className={className}>
          <div className={`w-auto mx-auto ${white && "text-white"}`}>
            <Title>{data?.title}</Title>
            {/* images section */}
            <div className="flex gap-5 w-full">
              <div className="w-full">
                <img src={first.img} alt={first.alt} className=" w-full" />
              </div>
            </div>

            {/* text section */}
            <div>
              <Text className="text-left">{data?.text}</Text>
            </div>
            <div className="w-full">
              <img src={second.img} alt={second.alt} className=" w-full" />
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
