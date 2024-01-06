import { ReactNode } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Text from "../Text";

interface Props {
  children?: ReactNode;
  data?: PropData;
  flex?: boolean;
  white?: boolean;
  className?: string;
}

const Section = ({
  children,
  data,
  flex = false,
  white = false,
  className,
}: Props) => {
  return (
    children ?? (
      <>
        <Container white={white} flex={flex} className={className}>
          <div className={`w-auto mx-auto ${white && "text-white"}`}>
            <Title>{data?.title}</Title>
            {/* images section */}
            <div className="flex gap-5 w-full">
              <div className="w-full">
                {data?.images || (data?.image && data?.images) ? (
                  data?.images?.map((image) => (
                    <img src={image.img} alt={image.alt} className=" w-full" />
                  ))
                ) : (
                  <img
                    src={data?.image?.img}
                    alt={data?.image?.alt}
                    className=" w-full"
                  />
                )}

                {data?.subImage && (
                  <img
                    src={data?.subImage?.img}
                    alt={data?.subImage?.alt}
                    className=" w-[80%] mx-auto my-10"
                  />
                )}
              </div>
            </div>

            {/* text section */}
            <div>
              <Text className={`text-left ${className}`}>{data?.text}</Text>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default Section;
